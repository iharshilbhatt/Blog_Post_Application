import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';

const Post = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <h2 className="text-center text-red-500">Post not found!</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Back to Posts button */}
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-400">
          &larr; Back to Posts
        </Link>
      </div>

      {/* Post Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

      {/* Author and Date */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>

      {/* Post Content */}
      <div className="prose lg:prose-xl text-gray-700 leading-relaxed">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Category Tag */}
      <div className="mt-6 text-xs text-gray-400">
        Category: <span className="font-semibold">{post.category}</span>
      </div>
    </div>
  );
};

export default Post;
