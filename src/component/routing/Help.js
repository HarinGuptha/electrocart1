import React, { useState } from 'react';
import './Assignment.css'; // Import the CSS file for styling

function Help() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    // Simulate sending the query (in real-world, you'd probably send this to a server)
    setMessage('We will look into your issue. Thank you!!');
    setSubmitted(true);
    setQuery(''); // Clear the query input after submission
  };

  return (
    <div className="help-container">
      <h1 className="help-heading">Help Center</h1>

      <div
        className="question"
        onClick={() => toggleAnswer(1)}
      >
        <h2>How do I create an account?</h2>
        <div className={`answer ${activeQuestion === 1 ? 'show' : ''}`}>
          <p>
            To create an account, click on the "Sign Up" button at the top of the page. 
            Fill in your details, such as name, email, and password, then click "Submit."
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(2)}
      >
        <h2>How do I log out of my account?</h2>
        <div className={`answer ${activeQuestion === 2 ? 'show' : ''}`}>
          <p>
            To log out, click on your profile icon at the top right corner and select the "Log Out" option.
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(3)}
      >
        <h2>How do I search for a product?</h2>
        <div className={`answer ${activeQuestion === 3 ? 'show' : ''}`}>
          <p>
            Use the search bar at the top of the page. Type in the product name or category you're looking for, 
            and press Enter to see results.
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(4)}
      >
        <h2>Are the products on your site of good quality?</h2>
        <div className={`answer ${activeQuestion === 4 ? 'show' : ''}`}>
          <p>
            Yes, all our products are sourced from trusted suppliers. We ensure that they meet high-quality standards, 
            and each product is inspected before being listed on our site.
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(5)}
      >
        <h2>How do I place an order?</h2>
        <div className={`answer ${activeQuestion === 5 ? 'show' : ''}`}>
          <p>
            To place an order, browse through the products, select the items you want, 
            add them to your cart, and proceed to checkout. Fill in your shipping details and payment method, 
            then confirm your order.
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(7)}
      >
        <h2>What payment methods do you accept?</h2>
        <div className={`answer ${activeQuestion === 7 ? 'show' : ''}`}>
          <p>
            We accept credit cards, debit cards, PayPal, and bank transfers.
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(9)}
      >
        <h2>Do you offer gift cards?</h2>
        <div className={`answer ${activeQuestion === 9 ? 'show' : ''}`}>
          <p>
            Yes, we offer gift cards of various denominations. You can purchase them from our "Gift Cards" section.
          </p>
        </div>
      </div>

      <div
        className="question"
        onClick={() => toggleAnswer(10)}
      >
        <h2>How do I update my account details?</h2>
        <div className={`answer ${activeQuestion === 10 ? 'show' : ''}`}>
          <p>
            To update your account details, log in to your account and go to "Account Settings." 
            There, you can update your name, email, password, and other personal information.
          </p>
        </div>
      </div>

      {/* Extra Query Section */}
      <div className="extra-query">
        <h2>Have an additional question?</h2>
        <form onSubmit={handleQuerySubmit}>
          <textarea 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Type your question here..." 
            rows="4" 
            className="query-textarea"
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {submitted && (
          <div className="thank-you-message">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Help;




