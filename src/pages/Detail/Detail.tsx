import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadUserData } from "../../api/user";
import { IPost, IUser } from "../../types/Types";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Posts from "../../components/Posts";
import { loadPostsByUser } from "../../api/posts";

export default function Detail() {
  const [posts, setPosts] = useState<IPost[]>([])
  let params = useParams();
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    loadUserData(Number(params.userId)).then((userData) => {
      setUserData(userData);
    });
  }, []);

  const getUserPosts = () => {
    return posts.filter((post) => post.userId == userData?.id);
  };

  useEffect(() => {
    if(userData){
      loadPostsByUser(userData?.id).then(posts => {
        setPosts(posts);
      })
      
    }
    
  },[userData])

  return (
    <main>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Имя {userData?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Почта {userData?.email}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Логин {userData?.username}
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Posts posts={getUserPosts()}></Posts>
      </Container>
    </main>
  );
}
