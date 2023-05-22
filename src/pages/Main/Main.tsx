import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import { loadPosts } from "../../api/posts";
import { IPost } from "../../types/Types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loadPostsCreator } from "../../state/postReducer";
import Posts from "../../components/Posts";

export default function Main() {
  const dispatcher = useAppDispatch()
  const posts = useAppSelector(store => store.postsReducer) as IPost[]


  useEffect(() => {
    dispatcher(loadPostsCreator())
  }, []);

  return (
    <Container>
      <Posts posts={posts} />
    </Container>
  );
}
