import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Cart.css';
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
    <div className="cart-container">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button className="home-btn" onClick={() => navigate('/')}>Shop More...</button>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <p>{item.name}</p>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="buy-btn" onClick={() => setPaymentMode('select')}>Buy Now</button>
        </>
      )}

      {paymentMode === 'select' && (
        <div className="payment-popup">
          <div className="popup-content">
            <h3>Select Payment Mode</h3>
            <button className="payment-btn" onClick={() => handlePaymentMode('Cash')}>Cash</button>
            <button className="payment-btn" onClick={() => handlePaymentMode('Online')}>Online</button>
          </div>
        </div>
      )}

      {qrVisible && paymentMode === 'Online' && (
        <div className="payment-popup">
          <div className="popup-content">
            <h3>Scan the QR Code</h3>
            <img src={qrImage} alt="QR Code" className="qr-code" />
            <p>Enter the 12-digit UPI Reference ID after payment:</p>
            <input
              type="text"
              value={refId}
              onChange={(e) => setRefId(e.target.value)}
              placeholder="Enter Reference ID"
              className="ref-id-input"
            />
            <button className="submit-btn" onClick={handleSubmitRefId}>Submit</button>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div className="order-popup">
          <div className="popup-content">
            <h3>Order Placed Successfully!</h3>
            <p>Your order has been successfully placed. It will be arrived in 3-5 working days!!</p>
            <button className="close-btn" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;











