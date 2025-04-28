import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Cart.css';
import './CustomStyles.css';
import qrImage from '../../images/payment.avif'; // Ensure correct path to your image

const AddToCart = ({ cart, removeFromCart, clearCart }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMode, setPaymentMode] = useState(null);
  const [qrVisible, setQrVisible] = useState(false);
  const [refId, setRefId] = useState('');

  // Handle placing the order
  const handlePlaceOrder = () => {
    setPaymentMode(null);
    setOrderPlaced(true);
    clearCart();
  };

  // Handle selecting a payment mode
  const handlePaymentMode = (mode) => {
    if (mode === 'Cash') {
      handlePlaceOrder(); // Directly place the order for Cash payments
    } else if (mode === 'Online') {
      setQrVisible(true); // Show QR code for online payments
    }
    setPaymentMode(mode);
  };

  // Handle closing the order confirmation pop-up
  const handleClosePopup = () => {
    setOrderPlaced(false);
  };

  // Handle reference ID submission for online payment
  const handleSubmitRefId = () => {
    const refIdPattern = /^\d{12}$/; // Regular expression for exactly 12 digits
    if (!refIdPattern.test(refId)) {
      alert('Please enter a valid 12-digit UPI Reference ID.');
    } else {
      setQrVisible(false);
      handlePlaceOrder();
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0"><i className="bi bi-cart3 me-2"></i> Your Shopping Cart</h2>
            <button className="btn btn-outline-primary" onClick={() => {
              // Reset any filters or search terms by setting URL parameters
              navigate('/?reset=true');
            }}>
              <i className="bi bi-arrow-left me-2"></i> Continue Shopping
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-5 my-4 bg-light rounded">
              <i className="bi bi-cart-x display-1 text-muted mb-3"></i>
              <h4 className="mb-3">Your cart is empty</h4>
              <p className="mb-4 text-muted">Looks like you haven't added any products to your cart yet.</p>
              <button className="btn btn-custom-primary btn-lg" onClick={() => navigate('/?reset=true')}>
                <i className="bi bi-bag me-2"></i> Start Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0">Cart Items ({cart.length})</h5>
                </div>
                <div className="card-body p-0">
                  <div className="list-group list-group-flush">
                    {cart.map((item, index) => (
                      <div key={index} className="list-group-item d-flex align-items-center justify-content-between p-3">
                        <div className="d-flex align-items-center">
                          <div className="me-3" style={{ width: '60px', height: '60px' }}>
                            <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          </div>
                          <div>
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="mb-0 text-muted small">{item.category}</p>
                            <p className="mb-0 text-primary fw-bold">Rs. {item.price}</p>
                          </div>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(index)}>
                            <i className="bi bi-trash me-1"></i> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-white py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fw-bold">Total: Rs. {cart.reduce((total, item) => total + parseFloat(item.price || 0), 0).toFixed(2)}</p>
                    </div>
                    <button className="btn btn-custom-primary btn-lg" onClick={() => setPaymentMode('select')}>
                      <i className="bi bi-credit-card me-2"></i> Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {paymentMode === 'select' && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Select Payment Method</h3>
              <button className="btn btn-sm btn-outline-secondary rounded-circle" onClick={() => setPaymentMode(null)}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="card h-100 border-primary payment-option" onClick={() => handlePaymentMode('Cash')}>
                  <div className="card-body text-center p-4">
                    <i className="bi bi-cash-coin text-primary display-4 mb-3"></i>
                    <h5>Cash on Delivery</h5>
                    <p className="text-muted small mb-0">Pay when your order arrives</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-primary payment-option" onClick={() => handlePaymentMode('Online')}>
                  <div className="card-body text-center p-4">
                    <i className="bi bi-credit-card text-primary display-4 mb-3"></i>
                    <h5>Online Payment</h5>
                    <p className="text-muted small mb-0">Pay securely with UPI/Net Banking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {qrVisible && paymentMode === 'Online' && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Complete Your Payment</h3>
              <button className="btn btn-sm btn-outline-secondary rounded-circle" onClick={() => setQrVisible(false)}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <div className="text-center mb-4 p-3 bg-light rounded">
              <img src={qrImage} alt="QR Code" className="img-fluid mb-3" style={{ maxWidth: '250px' }} />
              <p className="mb-0 text-muted">Scan with any UPI app to pay</p>
            </div>
            <div className="mb-4">
              <label htmlFor="refId" className="form-label fw-bold">Enter 12-digit UPI Reference ID:</label>
              <input
                type="text"
                id="refId"
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                placeholder="e.g., 123456789012"
                className="form-control form-control-lg"
              />
              <div className="form-text">You'll find this in your payment app after successful transaction</div>
            </div>
            <div className="d-grid">
              <button className="btn btn-custom-primary btn-lg" onClick={handleSubmitRefId}>
                <i className="bi bi-check2-circle me-2"></i> Verify Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div className="popup-overlay">
          <div className="popup-content text-center">
            <div className="mb-4">
              <div className="success-animation">
                <i className="bi bi-check-circle-fill text-success display-1"></i>
              </div>
            </div>
            <h3 className="mb-3">Order Placed Successfully!</h3>
            <p className="mb-4">Thank you for your purchase. Your order has been successfully placed and will arrive in 3-5 working days!</p>
            <p className="mb-4 text-muted">A confirmation email has been sent to your registered email address.</p>
            <button className="btn btn-custom-primary btn-lg px-5" onClick={() => {
              handleClosePopup();
              navigate('/?reset=true');
            }}>
              <i className="bi bi-house me-2"></i> Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;











