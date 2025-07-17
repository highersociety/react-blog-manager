import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts, onDelete }) {
  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BlogList;