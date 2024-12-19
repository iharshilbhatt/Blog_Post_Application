import React from 'react';

const Home = () => {
  return (
    <div 
      className="bg-cover bg-no-repeat bg-center h-screen" 
      style={{ 
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-6 md:p-10 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 transform transition-transform duration-300 hover:scale-105">
          Welcome to My Blog
        </h1>
        <p className="text-md md:text-lg mb-8 transition duration-300 hover:opacity-80">
          This is a place where I share my thoughts on web development, programming, and the latest trends in tech.
        </p>
        <a
          href="/posts"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Explore Blog Posts
        </a>
      </div>
    </div>
  );
};

export default Home;
