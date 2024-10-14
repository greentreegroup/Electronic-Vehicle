import React from 'react';
import './BlogSection.css';

const BlogCard = ({ title, description }) => {
  return (
    <div className="blog-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="button-container">
      <button id="button-in-progress"> <a href="/">Get Started</a></button>
      </div>
    </div>
  );
};
const BlogSection = () => {
  return (
    <section className="blog-section">
      <h1>Latest Blog Posts</h1>
      <div className="cards-container">
        <BlogCard 
          title="Are You Looking For a China Electric Car ?" 
          description="We are committed to providing our customers with exceptional service." 
        />
        <BlogCard 
          title="Are You Looking For a China Hybrid Cars ?" 
          description="We are committed to providing our customers with exceptional service." 
        />
      </div>
    </section>
  );
};

export default BlogSection;
