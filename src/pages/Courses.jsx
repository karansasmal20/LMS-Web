import React from 'react'
import "../styles/courses.css"
import { NavLink } from 'react-router-dom';
const lms = () => {
    // const container = document.getElementById("container");
    // const registerBtn = document.getElementById("register");
    // const loginBtn = document.getElementById("login");

    // registerBtn.addEventListener("click", () => {
    //     container.classList.add("active");
    // });

    // loginBtn.addEventListener("click", () => {
    //     container.classList.remove("active");
    // });
    return (
        <div className='lms_container'>
            <main>
                <section id="home-page" class="page active">
                    <div class="hero">
                        <h1>Welcome to Alice!</h1>
                        <p>Your platform for lifelong learning. Explore a wide range of courses and enhance your skills.</p>
                        <div class="buttons">
                            <NavLink to="courses.html" class="button primary">Explore Courses</NavLink>
                            <NavLink to="register.html" class="button secondary">Get Started</NavLink>
                        </div>
                    </div>
                </section>

                <section id="courses-page" class="page">
                    <h2>Available Courses</h2>
                    <div class="course-grid">
                        <div class="course-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9j8P106aWlqwUWufOJlL5pLeSowFZCyvZHA&s" alt="Course 1" />
                            <h3>Introduction to Web Development</h3>
                            <p>Learn the basics of HTML, CSS, and JavaScript.</p>
                            <NavLink to="course-details.html?id=1" class="button small">View Details</NavLink>
                        </div>
                        <div class="course-card">
                            <img src="https://via.placeholder.com/300x150" alt="Course 2" />
                            <h3>Python for Beginners</h3>
                            <p>A beginner-friendly introduction to the Python programming language.</p>
                            <NavLink to="course-details.html?id=2" class="button small">View Details</NavLink>
                        </div>
                    </div>
                </section>

                <section id="login-page" class="page">
                    <h2>Sign In</h2>
                    <form class="auth-form">
                        <div class="form-group">
                            <label for="email">Email Address:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit" class="button primary">Sign In</button>
                        <p class="mt-1"><a href="#">Forgot password?</a></p>
                        <p>Don't have an account? <a href="register.html">Sign Up</a></p>
                    </form>
                </section>

                <section id="register-page" class="page">
                    <h2>Sign Up</h2>
                    <form class="auth-form">
                        <div class="form-group">
                            <label for="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                        <div class="form-group">
                            <label for="registerEmail">Email Address:</label>
                            <input type="email" id="registerEmail" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="registerPassword">Password:</label>
                            <input type="password" id="registerPassword" name="password" required />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>
                        <button type="submit" class="button primary">Sign Up</button>
                        <p>Already have an account? <a href="login.html">Sign In</a></p>
                    </form>
                </section>

                <section id="dashboard-page" class="page protected">
                    <h2>Dashboard</h2>
                    <div class="dashboard-content">
                        <p>Welcome, <span id="user-name">User</span>!</p>
                        <h3>My Courses</h3>
                        <ul id="my-courses-list">
                            <NavLink to={"/db"}>Introduction to Web Development (50% complete)</NavLink>
                            <li><a href="#">Python for Beginners (10% complete)</a></li>
                        </ul>
                        <button id="logout-button" class="button secondary">Logout</button>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Alice Learning Management System</p>
            </footer>
        </div>
    )
}

export default lms
