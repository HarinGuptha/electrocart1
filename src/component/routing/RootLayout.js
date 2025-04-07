import React from 'react'
import Footer from './Footer';
import { Outlet } from 'react-router-dom'
import './Marqui.css';
import Header from './Header';
function RootLayout() {
  return (
    <div>
      <div className="marquee-container">
        <div className="marquee-content">
        <p className="marquee-text">
  Welcome to our website! Register today and start shopping your favorite products!
  <span className="thank-you">Thank you!!</span> For visiting Our Website
</p>

        </div>
      </div>
      <Header/>
      <div style={{minHeight:'100vh'}} className='mx-4'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
export default RootLayout
