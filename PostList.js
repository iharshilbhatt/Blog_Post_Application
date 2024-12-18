import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const PostList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6); // Number of posts to show initially

  // Get unique categories from blogPosts
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

  // Filter posts based on the selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === selectedCategory);

  // Handle loading more posts
  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6); // Increase the number of visible posts by 6
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Latest Blog Posts</h1>

      {/* Category Filter */}
      <div className="mb-6 flex justify-center">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Tag Cloud */}
      <div className="mb-6 flex justify-center space-x-4">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="bg-white p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <Link
              to={`/post/${post.id}`}
              className="text-2xl font-semibold text-blue-600 hover:text-blue-400 mb-3 block transition duration-300"
            >
              {post.title}
            </Link>
            <p className="text-gray-700 mb-2">{post.content.substring(0, 100)}...</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="font-medium">By {post.author}</span>
              <span>{post.date}</span>
            </div>
            <span className="inline-block mt-3 text-xs text-gray-400 bg-gray-100 rounded-full px-2">
              {post.category}
            </span>
          </div>
        ))}
      </div>

      {/* Show message if no posts are found */}
      {filteredPosts.length === 0 && (
        <div className="text-center text-gray-600 mt-6">
          No posts found for "<strong>{selectedCategory}</strong>".
        </div>
      )}

      {/* Load More Button */}
      {visiblePosts < filteredPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
