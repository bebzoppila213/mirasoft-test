import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { IComment, IPost } from "../types/Types";
import { useState } from "react";
import LoaderHok from "../hok/LoaderHok";
import { loadComments } from "../api/comments"
import { delay } from "../utils/delay"
import { Link } from "react-router-dom";

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [commentsIsLoad, setCommentsIsLoad] = useState(false)

  const onPostClick = async () => {
    if(comments.length) return
    setCommentsIsLoad(true)
    const data = await loadComments(post.id)
    await delay(3000)
    setComments(data);
    setCommentsIsLoad(false)
    
  }

  return (
    <Accordion.Item onClick={onPostClick} eventKey={String(post.id)}>
      <Accordion.Header>
        <Row>
          <Col sm={true}>
            <Image
              style={{ maxWidth: 200 }}
              src="https://foundpets.ru/v2/cloud/images/0:0:jpeg/2020/9/9/19/159942246143_1599680740_main-image.jpg.x0.jpeg"
              rounded
            />
          </Col>
          <Col sm={true}>
            <h4>Имя {post.title}</h4>
            <p>{post.body}</p>
            <Link to={`/detail/${post.userId}`} className="btn btn-primary">Детальная информация</Link>
          </Col>
        </Row>
      </Accordion.Header>
      <Accordion.Body>
        <LoaderHok isLoading={commentsIsLoad}>
          <ListGroup>
            {comments.map((com) => (
              <ListGroup.Item>{com.body}</ListGroup.Item>
            ))}
          </ListGroup>
        </LoaderHok>
      </Accordion.Body>
    </Accordion.Item>
  );
}
