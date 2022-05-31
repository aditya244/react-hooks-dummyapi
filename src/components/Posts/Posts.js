import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Posts() {
  const [data, setData] = useState([]);

  const style = {
    link: {
      textDecoration: 'none',
    },
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data.slice(0, 10));
      let fetchedData = res.data.slice(0, 10);
      setData(fetchedData);
    });
  }, []);

  return (
    <div>
      <h1> Sample Api Webapp </h1>
      {data.map((data) => {
        return (
          <div className="post-container">
            <h3> {data.title} </h3>
            <NavLink
              className="button"
              style={style.link}
              to={`/posts/${data.id}`}
            >
              {' '}
              Read More{' '}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
