import React, { useState } from 'react';
import './Assignment.css'; // Import the CSS file for styling
import './CustomStyles.css'; // Import custom styles

function Help() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('faq');

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    // Simulate sending the query (in real-world, you'd probably send this to a server)
    setMessage('We will look into your issue. Thank you for contacting us!');
    setSubmitted(true);
    setQuery(''); // Clear the query input after submission

    // Auto-hide the thank you message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const faqItems = [
    {
      id: 1,
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Register' button in the navigation menu. Fill in your details, such as username, email, and password, then click 'Register'.",
      icon: "bi-person-plus"
    },
    {
      id: 2,
      question: "How do I log out of my account?",
      answer: "To log out, click on the 'Logout' option in the navigation menu. You'll be immediately logged out and redirected to the home page.",
      icon: "bi-box-arrow-right"
    },
    {
      id: 3,
      question: "How do I search for a product?",
      answer: "Use the search bar at the top right of the page. Type in the product name or category you're looking for, and press Enter to see results. You can also browse products by category using the category filters on the home page.",
      icon: "bi-search"
    },
    {
      id: 4,
      question: "Are the products on your site of good quality?",
      answer: "Yes, all our products are sourced from trusted suppliers. We ensure that they meet high-quality standards, and each product is inspected before being listed on our site. We also offer warranty on most electronic components.",
      icon: "bi-patch-check"
    },
    {
      id: 5,
      question: "How do I place an order?",
      answer: "To place an order, browse through the products, select the items you want, add them to your cart, and proceed to checkout. Fill in your shipping details and payment method, then confirm your order. You'll receive an order confirmation email once your purchase is complete.",
      icon: "bi-cart-check"
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, UPI payments, and cash on delivery. All online transactions are secure and encrypted to protect your payment information.",
      icon: "bi-credit-card"
    },
    {
      id: 7,
      question: "Do you offer gift cards?",
      answer: "Yes, we offer gift cards of various denominations. You can purchase them from our 'Gift Cards' section and send them to friends or family via email.",
      icon: "bi-gift"
    },
    {
      id: 8,
      question: "How do I update my account details?",
      answer: "To update your account details, log in to your account and go to 'Account Settings.' There, you can update your name, email, password, and other personal information.",
      icon: "bi-pencil-square"
    }
  ];

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="card-header bg-primary text-white p-4">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="h3 mb-0"><i className="bi bi-question-circle me-2"></i> Help Center</h1>
                <div className="input-group" style={{ maxWidth: '300px' }}>
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search help topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="card-body p-0">
              <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                  <button
                    className={`nav-link border-0 rounded-0 py-3 ${activeTab === 'faq' ? 'active bg-light' : ''}`}
                    onClick={() => setActiveTab('faq')}
                  >
                    <i className="bi bi-question-diamond me-2"></i> Frequently Asked Questions
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link border-0 rounded-0 py-3 ${activeTab === 'contact' ? 'active bg-light' : ''}`}
                    onClick={() => setActiveTab('contact')}
                  >
                    <i className="bi bi-envelope me-2"></i> Contact Support
                  </button>
                </li>
              </ul>

              {activeTab === 'faq' && (
                <div className="p-4 bg-light">
                  {searchQuery && filteredFaqs.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="bi bi-search display-1 text-muted"></i>
                      <h4 className="mt-3">No results found</h4>
                      <p className="text-muted">Try different keywords or browse our categories</p>
                      <button
                        className="btn btn-outline-primary mt-2"
                        onClick={() => setSearchQuery('')}
                      >
                        Clear Search
                      </button>
                    </div>
                  ) : (
                    <div className="accordion" id="faqAccordion">
                      {filteredFaqs.map((item) => (
                        <div className="accordion-item border mb-3 rounded overflow-hidden" key={item.id}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button ${activeQuestion === item.id ? '' : 'collapsed'}`}
                              type="button"
                              onClick={() => toggleAnswer(item.id)}
                            >
                              <i className={`bi ${item.icon} me-2 text-primary`}></i>
                              <span className="fw-medium">{item.question}</span>
                            </button>
                          </h2>
                          <div className={`accordion-collapse collapse ${activeQuestion === item.id ? 'show' : ''}`}>
                            <div className="accordion-body bg-white">
                              <p className="mb-0">{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="row mt-5">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="bi bi-book fs-3"></i>
                          </div>
                          <h5 className="card-title">User Guides</h5>
                          <p className="card-text text-muted">Detailed guides on how to use our platform and products</p>
                          <button className="btn btn-outline-primary mt-2">View Guides</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="bi bi-play-circle fs-3"></i>
                          </div>
                          <h5 className="card-title">Video Tutorials</h5>
                          <p className="card-text text-muted">Watch step-by-step tutorials on product usage and features</p>
                          <button className="btn btn-outline-primary mt-2">Watch Videos</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="bi bi-chat-dots fs-3"></i>
                          </div>
                          <h5 className="card-title">Live Chat</h5>
                          <p className="card-text text-muted">Connect with our support team for immediate assistance</p>
                          <button className="btn btn-outline-primary mt-2">Start Chat</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="p-4 bg-light">
                  <div className="row">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-5">
                          <div className="text-center mb-4">
                            <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                              <i className="bi bi-envelope-paper fs-2"></i>
                            </div>
                            <h3 className="fw-bold">Send Us a Message</h3>
                            <p className="text-muted">We'll get back to you within 24 hours</p>
                          </div>

                          <form onSubmit={handleQuerySubmit}>
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label fw-medium">Your Name</label>
                                <div className="input-group">
                                  <span className="input-group-text bg-light border-end-0">
                                    <i className="bi bi-person text-primary"></i>
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control border-start-0 ps-0"
                                    id="name"
                                    placeholder="Enter your name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label fw-medium">Email Address</label>
                                <div className="input-group">
                                  <span className="input-group-text bg-light border-end-0">
                                    <i className="bi bi-envelope text-primary"></i>
                                  </span>
                                  <input
                                    type="email"
                                    className="form-control border-start-0 ps-0"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="subject" className="form-label fw-medium">Subject</label>
                              <div className="input-group">
                                <span className="input-group-text bg-light border-end-0">
                                  <i className="bi bi-tag text-primary"></i>
                                </span>
                                <select className="form-select border-start-0 ps-0" id="subject" required>
                                  <option value="">Select a topic</option>
                                  <option value="order">Order Issues</option>
                                  <option value="product">Product Information</option>
                                  <option value="account">Account Help</option>
                                  <option value="payment">Payment Problems</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>

                            <div className="mb-4">
                              <label htmlFor="message" className="form-label fw-medium">Your Message</label>
                              <div className="input-group">
                                <span className="input-group-text bg-light border-end-0 align-items-start pt-2">
                                  <i className="bi bi-chat-left-text text-primary"></i>
                                </span>
                                <textarea
                                  className="form-control border-start-0 ps-0"
                                  id="message"
                                  rows="6"
                                  placeholder="Describe your issue in detail..."
                                  value={query}
                                  onChange={(e) => setQuery(e.target.value)}
                                  required
                                ></textarea>
                              </div>
                            </div>

                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary py-3 fw-medium">
                                <i className="bi bi-send me-2"></i> Send Message
                              </button>
                            </div>
                          </form>

                          {submitted && (
                            <div className="alert alert-success mt-4" role="alert">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-check-circle-fill fs-4 me-2"></i>
                                <div>
                                  <h6 className="alert-heading mb-1">Message Sent!</h6>
                                  <p className="mb-0">{message}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-4"><i className="bi bi-info-circle me-2 text-primary"></i> Contact Information</h4>

                          <div className="d-flex align-items-center p-3 mb-3 bg-light rounded">
                            <div className="rounded-circle bg-white p-3 me-3 shadow-sm">
                              <i className="bi bi-envelope-fill text-primary fs-4"></i>
                            </div>
                            <div>
                              <h6 className="fw-bold mb-1">Email Us</h6>
                              <p className="mb-0 text-primary">support@electrostore.com</p>
                            </div>
                          </div>

                          <div className="d-flex align-items-center p-3 mb-3 bg-light rounded">
                            <div className="rounded-circle bg-white p-3 me-3 shadow-sm">
                              <i className="bi bi-telephone-fill text-primary fs-4"></i>
                            </div>
                            <div>
                              <h6 className="fw-bold mb-1">Call Us</h6>
                              <p className="mb-0 text-primary">+1 (800) 123-4567</p>
                            </div>
                          </div>

                          <div className="d-flex align-items-center p-3 bg-light rounded">
                            <div className="rounded-circle bg-white p-3 me-3 shadow-sm">
                              <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                            </div>
                            <div>
                              <h6 className="fw-bold mb-1">Visit Us</h6>
                              <p className="mb-0">123 Electronics Way<br />Tech City, TC 12345</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <h4 className="fw-bold mb-4"><i className="bi bi-clock me-2 text-primary"></i> Business Hours</h4>

                          <div className="p-3 mb-3 bg-light rounded">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-calendar-week text-primary fs-4 me-3"></i>
                                <span className="fw-medium">Monday - Friday</span>
                              </div>
                              <span className="badge bg-primary rounded-pill px-3 py-2">9:00 AM - 6:00 PM</span>
                            </div>
                          </div>

                          <div className="p-3 mb-3 bg-light rounded">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-calendar-week text-primary fs-4 me-3"></i>
                                <span className="fw-medium">Saturday</span>
                              </div>
                              <span className="badge bg-primary rounded-pill px-3 py-2">10:00 AM - 4:00 PM</span>
                            </div>
                          </div>

                          <div className="p-3 bg-light rounded">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-calendar-week text-primary fs-4 me-3"></i>
                                <span className="fw-medium">Sunday</span>
                              </div>
                              <span className="badge bg-danger rounded-pill px-3 py-2">Closed</span>
                            </div>
                          </div>

                          <div className="alert alert-info mt-4 mb-0" role="alert">
                            <div className="d-flex">
                              <i className="bi bi-headset fs-4 me-2"></i>
                              <div>
                                <h6 className="alert-heading mb-1">24/7 Support</h6>
                                <p className="mb-0">Online support is available 24/7 through our chat system.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="card-footer bg-white p-4 text-center">
              <p className="mb-0 text-muted">
                <i className="bi bi-headset me-2"></i>
                Need more help? Our support team is available 24/7 to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;




