import React, { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'Welcome to the blog!' },
    { id: 2, title: 'React is Fun', content: 'React lets you build UIs using components.' },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Blog Post Manager</h1>
      <BlogForm onAddPost={addPost} />
      <BlogList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;