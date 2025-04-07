import React from 'react';
import './Assignment.css';
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer gradient-bg-footer py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-white">About Us</h5>
            <p className="text-white-50">Our's is a User Friendly webpage with full of animations and products with high quality with low price</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-white">Contact Us</h5>
            <p className="text-white-50">Email: avg.tech_guy@gmail.com</p>
            <p className="text-white-50">Phone: +91-8897410780</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
  <h5 className="text-uppercase text-white mb-3">Follow Us</h5>
  <div className="d-flex justify-content-center align-items-center">
  <a href="https://www.facebook.com">
  <SiFacebook className="text-white mb-2 mx-2" />
</a>
<a href="https://twitter.com">
  <FaTwitter className="text-white mb-2 mx-2" />
</a>
<a href="https://www.instagram.com/avg.tech_guy/">
  <FaInstagram className="text-white mb-2 mx-2" />
</a>
<a href="https://www.linkedin.com/in/harin-guptha-74b882294/">
  <FaLinkedin className="text-white mb-2 mx-2" />
</a>

  </div>
</div>

        </div>
        <div className="text-center mt-4 text-white-50">
          <p>© avg.tech_guy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


