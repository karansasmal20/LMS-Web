import React, { useState } from 'react';
import '../styles/login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev); // ✅ Toggle state properly
  };

  return (
    <div className="outer_login_container">
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="login_container">
        
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <NavLink to="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></NavLink>
              <NavLink to="#" className="icon"><i className="fa-brands fa-facebook-f"></i></NavLink>
              <NavLink to="#" className="icon"><i className="fa-brands fa-github"></i></NavLink>
              <NavLink to="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></NavLink>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <NavLink to="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></NavLink>
              <NavLink to="#" className="icon"><i className="fa-brands fa-facebook-f"></i></NavLink>
              <NavLink to="#" className="icon"><i className="fa-brands fa-github"></i></NavLink>
              <NavLink to="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></NavLink>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <NavLink to="#">Forgot your password?</NavLink>
            <button type="button">Sign In</button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="hidden" onClick={toggleForm}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button className="hidden" onClick={toggleForm}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;