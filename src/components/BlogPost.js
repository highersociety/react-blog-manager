import React from 'react';

function BlogPost({ post, onDelete }) {
  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}

export default BlogPost;