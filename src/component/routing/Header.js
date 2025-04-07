import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { logincontextobj } from "../contexts/Logincontext";
import "./Assignment.css";

function Header() {
  const { userlogin, userlogout } = useContext(logincontextobj);

  return (
    <div className="gradient-bg py-4 ml-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <img
            src="https://media.tenor.com/u8LOMsmQXIkAAAAi/mmedia-mreza-mmedia.gif"
            alt="Company Logo"
            className="logo width1"
          />

          <div className="search-container">
          </div>

          <ul className="nav">
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link text-decoration-none text-white"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link text-decoration-none text-white"
                to="/aboutus"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link text-decoration-none text-white"
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link text-decoration-none text-white"
                to="/help"
                activeClassName="active"
              >
                Help
              </NavLink>
            </li>
            {userlogin === false ? (
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-decoration-none text-white"
                  to="/login"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <NavLink
                    className="nav-link text-decoration-none text-white"
                    to="/login"
                    onClick={userlogout}
                    activeClassName="active"
                  >
                    Logout
                  </NavLink>
                </li>
                <li className="nav-item mx-2 d-flex align-items-center">
                  <FaUserCircle size={40} className="text-white me-2" />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;













