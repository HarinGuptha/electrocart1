import React, { useState } from "react";
import Products from './Product';
import AddToCart from './Addtocart';
import { FcSearch } from "react-icons/fc";
import './Assignment.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState(""); // Manage search term state
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 6, name: "Potentiometer", category: "Electronic Components", image: "https://rukminim2.flixcart.com/image/750/900/l4d2ljk0/electronic-hobby-kit/h/s/1/d-shaf-single-pack-of-2-potentiometer-electronic-components-original-imagfa32nkky9ggq.jpeg?q=20&crop=false" },

    { id: 13, name: "SSV CARE DC", category: "Motors", image: "https://rukminim3.flixcart.com/image/850/1000/krkyt8w0/electronic-hobby-kit/y/f/n/dc-12v-100w-1300015000rpm-775-motor-high-speed-large-torque-dc-original-imag5ceuy4rvg2fr.jpeg?q=90&crop=false" },
   
    { id: 20, name: "Livguard Invertuff", category: "Batteries", image: "https://rukminim2.flixcart.com/image/850/1000/kp5sya80/inverter-battery/j/k/m/invertuff-it2048-200ah-tall-tubular-inverter-battery-livguard-original-imag3gbhhdtgdazy.jpeg?q=90&crop=false" },
   
    { id: 29, name: "Dmd Wire Connectors", category: "Cables & Connectors", image: "https://rukminim3.flixcart.com/image/450/400/xif0q/wire-joint-connector/t/g/5/20-20pack-10-pcs-bnc-cable-black-and-10-pcs-dc-power-male-red-original-imah8zqtdtbz4zsc.jpeg?q=90&crop=false" },
    
    { id: 41, name: "Sensors", category: "Sensors", image: "https://rukminim1.flixcart.com/image/300/300/kog30y80/electronic-hobby-kit/6/1/k/pack-of-4-ir-proximity-sensor-for-line-follower-and-obstacle-original-imag2wtgstghxgjg.jpeg" },
    
  ];
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");  // Clear search term when a category is selected
    setSearchResults([]);
  };

  // Add product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Toggle the cart visibility
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Remove item from the cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Clear the cart (Buy Now button functionality)
  const handleBuyNow = () => {
    setCart([]); // Clears the cart
  };

  // Filter products based on selected category or search results
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : searchResults.length > 0
    ? searchResults
    : products;

  const noProductsFound = searchResults.length === 0 && searchTerm && !selectedCategory;

  return (
    <div>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FcSearch className="search-icon" />
      </div>

      {/* Cart Button */}
      <button
        className="cart-icons"
        onClick={handleCartToggle}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <img
          src="https://media.tenor.com/wtWn-AjUZ5YAAAAi/add-to-cart-aggiungi-a-carrello.gif"
          alt="Toggle Cart"
          style={{ width: "50px", height: "50px" }}
        />
      </button>

      {/* Categories Section */}
      <div className="category-container">
        <div className="category-card" onClick={() => handleCategoryClick('Electronic Components')}>
          <p className="pt-3 px-1 text-secondary">Electronic Components </p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Motors')}>
          <p className="pt-3 px-1 text-secondary">Motors</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Batteries')}>
          <p className="pt-3 px-1 text-secondary">Batteries</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Cables & Connectors')}>
          <p className="pt-3 px-1 text-secondary">Cables & Connectors </p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Sensors')}>
          <p className="pt-3 px-1 text-secondary">Sensors</p>
        </div>
      </div>

      {/* Display Cart or Products */}
      {isCartOpen ? (
        <AddToCart cart={cart} removeFromCart={handleRemoveFromCart} clearCart={handleBuyNow} />
      ) : (
        <>
          {noProductsFound ? (
            <div className="no-products-found">No products found</div>
          ) : (
            <Products searchResults={filteredProducts} handleAddToCart={handleAddToCart} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;







 














