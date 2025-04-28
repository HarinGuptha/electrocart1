import React, { useState } from 'react'
import Footer from './Footer';
import { Outlet } from 'react-router-dom'
import './Marqui.css';
import './CustomStyles.css';
import Header from './Header';
function RootLayout() {
  // State for search and cart that will be shared across components
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to toggle cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="marquee-container">
        <div className="marquee-content">
          <p className="marquee-text">
            <i className="bi bi-lightning-fill me-2"></i> Welcome to our website! Register today and start shopping your favorite products!
            <span className="thank-you"><i className="bi bi-heart-fill me-1"></i> Thank you for visiting Our Website!</span>
            <span className="thank-you"><i className="bi bi-tag-fill me-1"></i> Get special discounts on all electronic components!</span>
          </p>
        </div>
      </div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        cart={cart}
        handleCartToggle={handleCartToggle}
      />
      <main className="flex-grow-1 py-3">
        <Outlet context={{
          searchTerm,
          setSearchTerm,
          handleSearch,
          cart,
          setCart,
          isCartOpen,
          setIsCartOpen,
          handleCartToggle
        }}/>
      </main>
      <Footer/>
    </div>
  )
}
export default RootLayout
