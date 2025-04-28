import React from 'react';
import './Assignment.css';
import './CustomStyles.css';
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer-custom py-4 mt-5">
      <div className="container text-center">
        <div className="row gy-4 justify-content-center">
          <div className="col-md-4">
            <h5 className="text-uppercase text-light mb-3">About Us</h5>
            <p className="text-light opacity-75">Our's is a User Friendly webpage with products of high quality at low prices</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase text-light mb-3">Contact Us</h5>
            <p className="text-light opacity-75 mb-1">Email: avg.tech_guy@gmail.com</p>
            <p className="text-light opacity-75">Phone: +91-8897410780</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase text-light mb-3">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center">
              <a href="https://www.facebook.com" className="text-light fs-5" aria-label="Facebook">
                <SiFacebook />
              </a>
              <a href="https://twitter.com" className="text-light fs-5" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/avg.tech_guy/" className="text-light fs-5" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/harin-guptha-74b882294/" className="text-light fs-5" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light opacity-25 my-4" />
        <div className="text-center">
          <p className="text-light opacity-75 mb-0">© avg.tech_guy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


