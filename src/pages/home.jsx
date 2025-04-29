import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to AliceEdu!</h1>
        <p>Your one-stop platform to manage learning, teaching, and progress tracking.</p>
        <button>Get Started</button>
      </section>

      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="category-list">
          <div className="category">Technology</div>
          <div className="category">Business</div>
          <div className="category">Design</div>
          <div className="category">Science</div>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses">
          <div className="course-card">
            <h3>React for Beginners</h3>
            <p>Build dynamic web apps with React.</p>
          </div>
          <div className="course-card">
            <h3>UI/UX Design</h3>
            <p>Learn modern design principles and tools.</p>
          </div>
          <div className="course-card">
            <h3>Python Programming</h3>
            <p>Master Python from basics to advanced.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} SmartLMS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
