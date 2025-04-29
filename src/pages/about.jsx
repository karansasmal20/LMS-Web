import React from 'react';
import '../styles/courses.css'; // Assuming you have a separate CSS file for styles
import { NavLink } from 'react-router-dom';

const About = () => {

  return (
    <div className='about container'>
      <main>
        <section id="home-page" className="page active">
          <div className="hero">
            <h1>Welcome to Alice!</h1>
            <p>Your platform for lifelong learning. Explore a wide range of courses and enhance your skills.</p>
            <div className="buttons">
              <NavLink to="courses.html" className="button primary">Explore Courses</NavLink>
              <NavLink to="register.html" className="button secondary">Get Started</NavLink>
            </div>
          </div>
        </section>

        <section id="courses-page" className="page">
          <h2>Available Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <img src="https://encrypted-tbn0.gstatic.com/ihttps://img.freepik.com/premium-vector/lms-website-landing-page-education-landing-page-course-sale-landing-page_755018-454.jpgmages?q=tbn:ANd9GcS9j8P106aWlqwUWufOJlL5pLeSowFZCyvZHA&s" alt="Course 1" />
              <h3>Introduction to Web Development</h3>
              <p>Learn the basics of HTML, CSS, and JavaScript.</p>
              <NavLink to="course-details.html?id=1" className="button small">View Details</NavLink>
            </div>
            <div className="course-card">
              <img src="https://encrypted-tbn0.gstatic.com/ihttps://img.freepik.com/premium-vector/lms-website-landing-page-education-landing-page-course-sale-landing-page_755018-454.jpgmages?q=tbn:ANd9GcS9j8P106aWlqwUWufOJlL5pLeSowFZCyvZHA&s" alt="Course 2" />
              <h3>Python for Beginners</h3>
              <p>A beginner-friendly introduction to the Python programming language.</p>
              <NavLink to="course-details.html?id=2" className="button small">View Details</NavLink>
            </div>
          </div>
        </section>

        <section id="login-page" className="page">
          <h2>Sign In</h2>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="button primary">Sign In</button>
            <p className="mt-1"><NavLink to="#">Forgot password?</NavLink></p>
            <p>Don't have an account? <NavLink to="register.html">Sign Up</NavLink></p>
          </form>
        </section>

        <section id="register-page" className="page">
          <h2>Sign Up</h2>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerEmail">Email Address:</label>
              <input type="email" id="registerEmail" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword">Password:</label>
              <input type="password" id="registerPassword" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit" className="button primary">Sign Up</button>
            <p>Already have an account? <a href="login.html">Sign In</a></p>
          </form>
        </section>

        <section id="dashboard-page" className="page protected">
          <h2>Dashboard</h2>
          <div className="dashboard-content">
            <p>Welcome, <span id="user-name">User</span>!</p>
            <h3>My Courses</h3>
            <ul id="my-courses-list">
              <li><NavLink to="#">Introduction to Web Development (50% complete)</NavLink></li>
              <li><NavLink to="#">Python for Beginners (10% complete)</NavLink></li>
            </ul>
            <button id="logout-button" className="button secondary">Logout</button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Alice Learning Management System</p>
      </footer>
    </div>
  );
};

export default About;
