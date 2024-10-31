import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logincontextobj } from '../contexts/Logincontext';
import { FcSms, FcSearch } from "react-icons/fc";
import './Assignment.css';

function Header() {
  const { userlogin, userlogout } = useContext(logincontextobj);
  return (
    <div className='gradient-bg py-4'>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <FcSms className='width1' />
          <ul className="nav">
            <li className="nav-item mx-2">
              <Link className='nav-link text-decoration-none text-white' to=''>Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className='nav-link text-decoration-none text-white' to='register'>Register</Link>
            </li>
            {userlogin === false ? (
              <li className="nav-item mx-2">
                <Link className='nav-link text-decoration-none text-white' to='login'>Login</Link>
              </li>
            ) : (
              <li className="nav-item mx-2">
                <Link className='nav-link text-decoration-none text-white' to='login' onClick={userlogout}>Logout</Link>
              </li>
            )}
            <li className="nav-item mx-2">
              <Link className='nav-link text-decoration-none text-white' to='Aboutus'>About Us</Link>
            </li>
          </ul>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input"/>
            <FcSearch className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;




