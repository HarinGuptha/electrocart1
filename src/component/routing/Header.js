import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { logincontextobj } from "../contexts/Logincontext";
import "./Assignment.css";
import "./CustomStyles.css";

function Header({ searchTerm, setSearchTerm, handleSearch, cart, handleCartToggle }) {
  const { userlogin, userlogout } = useContext(logincontextobj);
  const navigate = useNavigate();

  // If props are not provided (for pages other than Home), initialize with defaults
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  // Use the props if provided, otherwise use local state
  const actualSearchTerm = searchTerm !== undefined ? searchTerm : localSearchTerm;
  const actualSetSearchTerm = setSearchTerm !== undefined ? setSearchTerm : setLocalSearchTerm;

  // Handle search if not provided from props
  const handleLocalSearch = (e) => {
    actualSetSearchTerm(e.target.value);
    if (handleSearch) {
      handleSearch(e);
    } else if (e.target.value && e.key === 'Enter') {
      navigate('/');
    }
  };

  return (
    <nav className="header-custom py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-lg-2 mb-2 mb-md-0 text-center text-md-start">
            <NavLink to="/">
              <img
                src="https://media.tenor.com/u8LOMsmQXIkAAAAi/mmedia-mreza-mmedia.gif"
                alt="Company Logo"
                className="logo width1"
              />
            </NavLink>
          </div>

          <div className="col-md-5 col-lg-5 mb-2 mb-md-0 d-flex justify-content-center">
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive ? "nav-link-custom active mx-2" : "nav-link-custom mx-2"}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive ? "nav-link-custom active mx-2" : "nav-link-custom mx-2"}
                  to="/aboutus"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive ? "nav-link-custom active mx-2" : "nav-link-custom mx-2"}
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive ? "nav-link-custom active mx-2" : "nav-link-custom mx-2"}
                  to="/help"
                >
                  Help
                </NavLink>
              </li>
              <li className="nav-item">
                {userlogin === false ? (
                  <NavLink
                    className={({isActive}) => isActive ? "nav-link-custom active mx-2" : "nav-link-custom mx-2"}
                    to="/login"
                  >
                    Login
                  </NavLink>
                ) : (
                  <NavLink
                    className={({isActive}) => isActive ? "nav-link-custom active mx-2" : "nav-link-custom mx-2"}
                    to="/login"
                    onClick={userlogout}
                  >
                    Logout
                  </NavLink>
                )}
              </li>
              {userlogin && (
                <li className="nav-item" style={{ marginLeft: '-10px', marginRight: '5px' }}>
                  <FaUserCircle size={25} className="text-white" />
                </li>
              )}

            </ul>
          </div>

          <div className="col-md-5 col-lg-5 d-none d-md-block">
            <div className="d-flex align-items-center justify-content-end">
              <div className="search-bar-container" style={{ maxWidth: '300px', marginRight: '15px' }}>
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <FcSearch className="fs-5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="form-control border-start-0 ps-0"
                    value={actualSearchTerm}
                    onChange={handleLocalSearch}
                    onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
                  />
                </div>
              </div>

              <button
                className="btn btn-custom-primary position-relative"
                onClick={handleCartToggle || (() => navigate('/cart'))}
                style={{ height: '38px' }}
              >
                <i className="bi bi-cart-fill me-2"></i> Cart
                {cart && cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="d-md-none text-end">
            <button className="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
              <i className="bi bi-list"></i> Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu">
        <div className="offcanvas-header" style={{ backgroundColor: 'var(--secondary-color)' }}>
          <h5 className="offcanvas-title text-white">Menu</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush">
            <NavLink className="list-group-item list-group-item-action py-3 border-0" to="/" data-bs-dismiss="offcanvas">
              <i className="bi bi-house-door me-2"></i> Home
            </NavLink>
            <NavLink className="list-group-item list-group-item-action py-3 border-0" to="/aboutus" data-bs-dismiss="offcanvas">
              <i className="bi bi-info-circle me-2"></i> About Us
            </NavLink>
            <NavLink className="list-group-item list-group-item-action py-3 border-0" to="/register" data-bs-dismiss="offcanvas">
              <i className="bi bi-person-plus me-2"></i> Register
            </NavLink>
            <NavLink className="list-group-item list-group-item-action py-3 border-0" to="/help" data-bs-dismiss="offcanvas">
              <i className="bi bi-question-circle me-2"></i> Help
            </NavLink>
            <NavLink className="list-group-item list-group-item-action py-3 border-0" to="/login" onClick={userlogin ? userlogout : undefined} data-bs-dismiss="offcanvas">
              <div className="d-flex align-items-center">
                {userlogin ? (
                  <>
                    <i className="bi bi-box-arrow-left me-2"></i> Logout
                    <FaUserCircle size={25} className="ms-2 text-primary" />
                  </>
                ) : (
                  <>
                    <i className="bi bi-box-arrow-in-right me-2"></i> Login
                  </>
                )}
              </div>
            </NavLink>
          </div>

          <div className="p-3 mt-2">
            <button
              className="btn btn-custom-primary w-100 py-2"
              onClick={() => {
                const dismissButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
                if (dismissButton) dismissButton.click();
                if (handleCartToggle) handleCartToggle();
                else navigate('/cart');
              }}
            >
              <i className="bi bi-cart-fill me-2"></i> View Cart
              {cart && cart.length > 0 && (
                <span className="badge bg-danger ms-2">{cart.length}</span>
              )}
            </button>

            <div className="mt-3">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <FcSearch className="fs-5" />
                </span>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="form-control border-start-0"
                  value={actualSearchTerm}
                  onChange={handleLocalSearch}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const dismissButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
                      if (dismissButton) dismissButton.click();
                      navigate('/');
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;













