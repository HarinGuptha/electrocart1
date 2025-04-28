import React from 'react';
import './CustomStyles.css';

function Aboutus() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-4">About <span className="text-primary">ElectroMart</span></h1>
          <p className="lead text-muted mb-0">Your trusted partner for all electronic components and solutions</p>
        </div>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Electronics Workshop"
              className="img-fluid rounded shadow-lg"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded"></div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, ElectroMart has been at the forefront of providing high-quality electronic components to hobbyists, professionals, and businesses alike. What started as a small shop has now grown into a trusted name in the electronics industry.
          </p>
          <p>
            Our mission is simple: to provide our customers with the best quality electronic components at affordable prices, backed by exceptional customer service. We believe in building long-term relationships with our customers based on trust, reliability, and quality.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 bg-light shadow-sm">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Why Choose Us?</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="bi bi-award fs-1"></i>
                    </div>
                    <h4>Quality Assurance</h4>
                    <p className="text-muted">All our products undergo rigorous quality checks to ensure they meet the highest standards.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="bi bi-truck fs-1"></i>
                    </div>
                    <h4>Fast Shipping</h4>
                    <p className="text-muted">We offer quick and reliable shipping to ensure you get your products when you need them.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="bi bi-headset fs-1"></i>
                    </div>
                    <h4>Customer Support</h4>
                    <p className="text-muted">Our dedicated team is always ready to assist you with any questions or concerns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mb-4">Our Team</h2>
          <p className="lead text-muted mb-5">Meet the passionate individuals behind ElectroMart</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4">
              <div className="rounded-circle overflow-hidden mx-auto mb-3" style={{width: '150px', height: '150px'}}>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team Member"
                  className="img-fluid"
                />
              </div>
              <h4>John Doe</h4>
              <p className="text-primary mb-2">Founder & CEO</p>
              <p className="text-muted">With over 15 years of experience in the electronics industry, John leads our team with vision and expertise.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4">
              <div className="rounded-circle overflow-hidden mx-auto mb-3" style={{width: '150px', height: '150px'}}>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team Member"
                  className="img-fluid"
                />
              </div>
              <h4>Jane Smith</h4>
              <p className="text-primary mb-2">Technical Director</p>
              <p className="text-muted">Jane ensures that all our products meet the highest technical standards and stay ahead of industry trends.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4">
              <div className="rounded-circle overflow-hidden mx-auto mb-3" style={{width: '150px', height: '150px'}}>
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Team Member"
                  className="img-fluid"
                />
              </div>
              <h4>Mike Johnson</h4>
              <p className="text-primary mb-2">Customer Relations</p>
              <p className="text-muted">Mike leads our customer support team, ensuring that every customer has a positive experience with ElectroMart.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;


