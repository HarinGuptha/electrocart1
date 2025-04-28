import React from "react";
import { useOutletContext } from 'react-router-dom';
import Products from './Product';
import AddToCart from './Addtocart';
import './Assignment.css';
import './CustomStyles.css';

function Home() {
  // Get context from RootLayout
  const {
    searchTerm,
    setSearchTerm,
    // We're not using these variables, so we can remove them to avoid warnings
    // handleSearch,
    cart,
    setCart,
    isCartOpen,
    // setIsCartOpen,
    // handleCartToggle
  } = useOutletContext();

  // Local state
  const [searchResults, setSearchResults] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const products = [
    { id: 6, name: "Potentiometer", category: "Electronic Components", image: "https://rukminim2.flixcart.com/image/750/900/l4d2ljk0/electronic-hobby-kit/h/s/1/d-shaf-single-pack-of-2-potentiometer-electronic-components-original-imagfa32nkky9ggq.jpeg?q=20&crop=false" },

    { id: 13, name: "SSV CARE DC", category: "Motors", image: "https://rukminim3.flixcart.com/image/850/1000/krkyt8w0/electronic-hobby-kit/y/f/n/dc-12v-100w-1300015000rpm-775-motor-high-speed-large-torque-dc-original-imag5ceuy4rvg2fr.jpeg?q=90&crop=false" },

    { id: 20, name: "Livguard Invertuff", category: "Batteries", image: "https://rukminim2.flixcart.com/image/850/1000/kp5sya80/inverter-battery/j/k/m/invertuff-it2048-200ah-tall-tubular-inverter-battery-livguard-original-imag3gbhhdtgdazy.jpeg?q=90&crop=false" },

    { id: 29, name: "Dmd Wire Connectors", category: "Cables & Connectors", image: "https://rukminim3.flixcart.com/image/450/400/xif0q/wire-joint-connector/t/g/5/20-20pack-10-pcs-bnc-cable-black-and-10-pcs-dc-power-male-red-original-imah8zqtdtbz4zsc.jpeg?q=90&crop=false" },

    { id: 41, name: "Sensors", category: "Sensors", image: "https://rukminim1.flixcart.com/image/300/300/kog30y80/electronic-hobby-kit/6/1/k/pack-of-4-ir-proximity-sensor-for-line-follower-and-obstacle-original-imag2wtgstghxgjg.jpeg" },

  ];
  // Check for reset parameter in URL
  React.useEffect(() => {
    // Get the URL parameters
    const params = new URLSearchParams(window.location.search);
    const resetParam = params.get('reset');

    // If reset=true is in the URL, clear filters and search
    if (resetParam === 'true') {
      setSelectedCategory(null);
      setSearchTerm('');
      setSearchResults([]);

      // Remove the reset parameter from URL without page refresh
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [setSearchTerm]); // Only run when the component mounts or URL changes

  // Update search results when searchTerm changes
  React.useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]); // products is defined in the component and doesn't change

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

  // This function is now provided by context

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
      <div className="container mt-4">

      {/* Categories Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-center">
            <div
              className={`category-item m-2 ${selectedCategory === 'Electronic Components' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Electronic Components')}
            >
              <i className="bi bi-cpu me-2"></i> Electronic Components
            </div>
            <div
              className={`category-item m-2 ${selectedCategory === 'Motors' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Motors')}
            >
              <i className="bi bi-gear me-2"></i> Motors
            </div>
            <div
              className={`category-item m-2 ${selectedCategory === 'Batteries' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Batteries')}
            >
              <i className="bi bi-battery-full me-2"></i> Batteries
            </div>
            <div
              className={`category-item m-2 ${selectedCategory === 'Cables & Connectors' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Cables & Connectors')}
            >
              <i className="bi bi-usb-plug me-2"></i> Cables & Connectors
            </div>
            <div
              className={`category-item m-2 ${selectedCategory === 'Sensors' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Sensors')}
            >
              <i className="bi bi-broadcast me-2"></i> Sensors
            </div>
            {selectedCategory && (
              <div
                className="category-item m-2 bg-light"
                onClick={() => handleCategoryClick(null)}
              >
                <i className="bi bi-x-circle me-2"></i> Clear Filter
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Display Cart or Products */}
      <div className="row">
        <div className="col-12">
          {isCartOpen ? (
            <AddToCart cart={cart} removeFromCart={handleRemoveFromCart} clearCart={handleBuyNow} />
          ) : (
            <>
              {noProductsFound ? (
                <div className="alert alert-info text-center">No products found</div>
              ) : (
                <Products searchResults={filteredProducts} handleAddToCart={handleAddToCart} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;






















