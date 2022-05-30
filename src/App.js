import React from 'react';
import './style.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

export default function App() {
  return (
    <BrowserRouter>
      <ul type="none">
        <li>
          <Link to="/"> Posts </Link>
        </li>
        <li>
          <Link to="/posts/:id"> Post </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
