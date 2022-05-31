import React from 'react';
import './style.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

const style = {
  navBar: {
    backgroundColor: '#465362',
    color: '#fff',
    height: '40px',
    width: '100%',
    paddingLeft: '10px',
    paddingTop: '15px',
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#fff',
  },
};

export default function App() {
  return (
    <BrowserRouter>
      <div style={style.navBar}>
        <Link style={style.navLink} to="/">
          {' '}
          Posts{' '}
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
