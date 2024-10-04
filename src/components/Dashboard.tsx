// src/components/Dashboard.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='mt-10'>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>

    
      <Outlet />
    </div>
  );
};

export default Dashboard;
