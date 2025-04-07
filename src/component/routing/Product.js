import React, { useState } from "react";

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
    <div className="row mt-4 mx-5">
      {/* Pop-up for item added to cart */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#28a745",
            color: "white",
            padding: "15px 30px",
            borderRadius: "8px",
            zIndex: 1000,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          Item added to cart successfully!
        </div>
      )}

      {/* Display selected product if a product is clicked */}
      {selectedProduct ? (
        <div className="col-12 mb-4 d-flex" style={{ justifyContent: "space-between" }}>
          {/* Left side: Product Image */}
          <div className="col-md-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Right side: Product Title, Description, Price, and Add to Cart button */}
          <div className="col-md-7" style={{ paddingLeft: "20px" }}>
            <h3>{selectedProduct.name}</h3>
            <p>
              {/* <strong>Category:</strong> {selectedProduct.category} */}
            </p>
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Price:</strong> Rs. {selectedProduct.price}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCartWithPopup(selectedProduct)} // Add product to cart
              className="btn btn-primary"
            >
              Add to Cart
            </button>

            {/* Back to Home Button */}
            <button
              onClick={handleBackToHome} // Go back to the home page (product list)
              className="btn btn-secondary mx-2"
            >
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        // When no product is selected, show the list of search results
        <>
          {/* When no search term is entered */}
          {!searchTerm && <p></p>}

          {/* When no products match the search term */}
          {searchTerm && productsWithPrices.length === 0 && <p>No products found.</p>}

          {/* Display products in simple boxes with image, title, price, and description */}
          {productsWithPrices.length > 0 && (
            <div className="d-flex flex-wrap">
              {productsWithPrices.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleClick(product)} // Update selected product when clicked
                  style={{
                    cursor: "pointer",
                    border: "1px solid #ddd", // Border around the product box
                    padding: "10px",
                    borderRadius: "8px",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    width: "200px",
                    height: "250px", // Adjusted height to accommodate price
                    margin: "10px", // Adding margin for spacing between the products
                  }}
                >
                  {/* Product Image */}
                  <img
                    src={product.image} // Use the image URL from the product data
                    alt={product.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Product Title */}
                  <h5 className="mt-2">{product.name}</h5>

                  {/* Product Category */}
                  <p>{product.category}</p>

                  {/* Product Price */}
                  <p>
                    <strong>Price:</strong> Rs: {product.price}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Products;















