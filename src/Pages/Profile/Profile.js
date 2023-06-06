import React, { useState } from 'react'
import './Profile.css'
import { UseAuth } from '../../Contexts/AuthContext'
import { Address } from './Components/Address/Address';
import { NavLink } from 'react-router-dom';

export const Profile = () => {
  const { setIsLoggedIn } = UseAuth();
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false)
  }

  const [currentTab, setCurrentTab] = useState("Profile")

  const user = JSON.parse(localStorage.getItem("practiceUser"));


  return (
    <>
      <div>
        <nav>
          <button onClick={() => setCurrentTab("Profile")}>Profile</button>
          <button onClick={() => setCurrentTab("Address")}>Address</button>
        </nav>
      </div>
      <NavLink to="/orderSummary"><h4>Order History</h4></NavLink>
      {
        currentTab === "Profile" &&
        <div>
          <h2>Name: {user.firstName} {user.lastName}</h2>
          <h2>Email: {user.email}</h2>
          <button onClick={handleLogout} className='logout-btn'>Log Out</button>
        </div>
      }
      {
        currentTab === "Address" && <Address />
      }
    </>
  )
}
