import React from 'react';
import "../styles/home.css"

const home = () => {
    return (
        <div className='home_container'>
            <div className="sidebar">
                <h2>LMS</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Courses</li>
                    <li>Students</li>
                    <li>Assignments</li>
                    <li>Settings</li>
                </ul>
            </div>

            <div className="main-content">
                <div className="navbar">
                    <h1>Dashboard</h1>
                    <input type="text" placeholder="Search..." />
                </div>

                <div className="cards">
                    <div className="card">
                        <h3>Total Courses</h3>
                        <p id="course-count">5</p>
                    </div>
                    <div className="card">
                        <h3>Students</h3>
                        <p id="student-count">120</p>
                    </div>
                    <div className="card">
                        <h3>Progress</h3>
                        <p id="progress">78%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
