import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  let { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
  }, []);

  return (
    <div>
      <h1> {post.title} </h1>
      <p> {post.body} </p>
    </div>
  );
}

export default Post;
