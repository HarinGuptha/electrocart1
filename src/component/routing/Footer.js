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
            <p className="text-white-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-white">Contact Us</h5>
            <p className="text-white-50">Email: avg.tech_guy@gmail.com</p>
            <p className="text-white-50">Phone: +91-8897410780</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-white">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <SiFacebook className="text-white me-3" />
              <FaTwitter className="text-white me-3" />
              <FaInstagram className="text-white me-3" />
              <FaLinkedin className="text-white me-3" />
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


