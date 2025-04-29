import React from 'react'

const ds = () => {
    document.getElementById('course-count').innerText = 8;
document.getElementById('student-count').innerText = 143;
document.getElementById('progress').innerText = '84%';
  return (
    <div>
      <div class="sidebar">
        <h2>LMS</h2>
        <ul>
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Students</li>
            <li>Assignments</li>
            <li>Settings</li>
        </ul>
    </div>

    <div class="main-content">
        <div class="navbar">
            <h1>Dashboard</h1>
            <input type="text" placeholder="Search..." />
        </div>

        <div class="cards">
            <div class="card">
                <h3>Total Courses</h3>
                <p id="course-count">5</p>
            </div>
            <div class="card">
                <h3>Students</h3>
                <p id="student-count">120</p>
            </div>
            <div class="card">
                <h3>Progress</h3>
                <p id="progress">78%</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ds
