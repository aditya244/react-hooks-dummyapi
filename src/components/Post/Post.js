import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../Comment/Comment';

const style = {
  section: {
    padding: '15px',
    backgroundColor: '#F8F4F4',
    margin: '50px',
  },
};

function Post() {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const [loadCmt, setLoadCmt] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
  }, []);

  useEffect(() => {
    if (loadCmt == true) {
      console.log('here');
      getComments(id);
    }
  }, [loadCmt]);

  function getCommentsData() {
    setLoadCmt(!loadCmt);
  }

  function getComments(id) {
    console.log(id);
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => {
        setComments(res.data);
      });
  }

  return (
    <section style={style.section}>
      <h1> {post.title} </h1>
      <p> {post.body} </p>
      <div onClick={getCommentsData} className="button">
        {loadCmt ? 'Hide Comments...' : 'Load Comments...'}
      </div>
      {loadCmt ? (
        <div>
          {comments.map((comment) => {
            return <Comment comment={comment} key={comment.id} />;
          })}
        </div>
      ) : null}
    </section>
  );
}

export default Post;
