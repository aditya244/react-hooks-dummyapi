import React from 'react';

const style = {
  commentBox: {
    border: 'solid 1px grey',
    padding: '10px',
    marginTop: '7px',
    backgroundColor: '#fff',
    borderRadius: '2px',
  },
  name: {
    fontSize: '12px',
  },
  email: {
    fontSize: '12px',
  },
  body: {
    fontSize: '14px',
  },
};

function Comment(props) {
  return (
    <div style={style.commentBox}>
      <p style={style.name}> {props.comment.name} </p>
      <p style={style.email}> {props.comment.email} </p>
      <p style={style.body}> {props.comment.body} </p>
    </div>
  );
}

export default Comment;
