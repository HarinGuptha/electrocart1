import React, { useState } from "react";
import './CustomStyles.css';

function Products({ searchResults, searchTerm, handleProductClick, handleAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility

  // Add random prices to the products
  const productsWithPrices = searchResults.map((product) => ({
    ...product,
    price: product.price || (Math.random() * (1000 - 100) + 100).toFixed(2), // Random price between 100 and 1000
  }));

  // This function will be called when a product is clicked
  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to go back to the home page (product list view)
  const handleBackToHome = () => {
    setSelectedProduct(null); // Set selected product to null to show product list again
  };

  // Function to handle adding product to cart and showing pop-up
  const handleAddToCartWithPopup = (product) => {
    handleAddToCart(product); // Add the product to the cart
    setShowPopup(true); // Show the pop-up
    setTimeout(() => setShowPopup(false), 2000); // Hide pop-up after 2 seconds
  };

  return (
    <div className="container">
      {/* Pop-up for item added to cart */}
      {showPopup && (
        <div className="position-fixed top-50 start-50 translate-middle alert alert-success">
          Item added to cart successfully!
        </div>
      )}

      {/* Display selected product if a product is clicked */}
      {selectedProduct ? (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card card-custom border-0 shadow">
              <div className="card-body p-4">
                <div className="row g-4">
                  {/* Left side: Product Image */}
                  <div className="col-md-5">
                    <div className="position-relative mb-3">
                      <span className="position-absolute top-0 start-0 badge bg-primary rounded-pill px-3 py-2 m-2">
                        {selectedProduct.category}
                      </span>
                      <div className="text-center p-4 bg-light rounded">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="img-fluid product-image"
                          style={{ maxHeight: '300px' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right side: Product Title, Description, Price, and Add to Cart button */}
                  <div className="col-md-7">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h2 className="mb-3 fw-bold">{selectedProduct.name}</h2>
                      <button
                        onClick={handleBackToHome}
                        className="btn btn-sm btn-outline-secondary rounded-circle"
                        title="Back to Products"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>

                    <div className="mb-4">
                      <p className="text-muted mb-3">{selectedProduct.description || 'High-quality electronic component perfect for your projects. This product offers reliable performance and durability.'}</p>
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <span className="text-muted">Availability:</span>
                          <span className="ms-2 text-success"><i className="bi bi-check-circle-fill"></i> In Stock</span>
                        </div>
                        <div>
                          <span className="text-muted">Rating:</span>
                          <span className="ms-2 text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="fs-2 fw-bold text-primary mb-0">Rs. {selectedProduct.price}</h3>
                      <small className="text-muted">Inclusive of all taxes</small>
                    </div>

                    <div className="d-grid gap-2 d-md-flex">
                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleAddToCartWithPopup(selectedProduct)}
                        className="btn btn-custom-primary btn-lg px-5"
                      >
                        <i className="bi bi-cart-plus me-2"></i> Add to Cart
                      </button>

                      {/* Buy Now Button */}
                      <button
                        className="btn btn-custom-secondary btn-lg px-5"
                      >
                        <i className="bi bi-lightning-fill me-2"></i> Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // When no product is selected, show the list of search results
        <div className="row">
          {/* When no search term is entered */}
          {!searchTerm && <div className="col-12"></div>}

          {/* When no products match the search term */}
          {searchTerm && productsWithPrices.length === 0 && (
            <div className="col-12">
              <div className="alert alert-info text-center">No products found.</div>
            </div>
          )}

          {/* Display products in a grid */}
          {productsWithPrices.length > 0 && (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {productsWithPrices.map((product) => (
                <div className="col" key={product.id}>
                  <div
                    className="product-card h-100"
                    onClick={() => handleClick(product)}
                  >
                    <div className="text-center mb-3">
                      {/* Product Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        style={{ height: "150px", objectFit: "contain" }}
                      />
                    </div>

                    {/* Product Title */}
                    <h5 className="mb-2 text-truncate" title={product.name}>{product.name}</h5>

                    {/* Product Category */}
                    <p className="text-muted small mb-2">{product.category}</p>

                    {/* Product Price */}
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <p className="fw-bold text-primary mb-0">
                        Rs. {product.price}
                      </p>
                      <button
                        className="btn btn-sm btn-outline-primary rounded-circle"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCartWithPopup(product);
                        }}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;















