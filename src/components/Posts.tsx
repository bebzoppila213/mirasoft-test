import { Row, Col, Accordion } from "react-bootstrap";
import { IPost } from "../types/Types";
import Post from "./Post";

type PostsProps = {
    posts: IPost[]
}

export default function Posts({posts}: PostsProps){

    const renderPosts = () => {
        const postsRows = [];
        for (let index = 0; index < posts.length; index += 2) {
          postsRows.push(
            <Row>
              <Col xs={6}>
                <Post post={posts[index]}></Post>
              </Col>
              <Col xs={6}>
                <Post post={posts[index + 1]}></Post>
              </Col>
            </Row>
          );
        }
        return postsRows;
      };

    return(
        <Accordion>{renderPosts()}</Accordion>
    )
}