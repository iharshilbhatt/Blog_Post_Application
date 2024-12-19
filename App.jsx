import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './components/PostList';
import Post from './components/Post';
import Header from './components/Header';
import Contact from './components/Contact'; // Import Contact component
import PrivacyPolicy from './components/PrivacyPolicy'; // Import PrivacyPolicy component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
            <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add Privacy Policy route */}
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
