import React from 'react'
import './Ass1.css'
import { FcVip } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Ass1() {
  return (
    <div className='flex1'>
        <div className='flexi'>
         <h1 className='icon'><FcVip/></h1>
     <ul className='ol mt-3'>
        <li style={{color:'blue'}}>Home</li>
        <li>About Author</li>
        <li>About this Project</li>
     </ul>
     </div>
     <div>
        <ul className='ol'>
       <li><h2><FaGithub/></h2></li>
       <li><h2><FaInstagram/></h2></li>
       <li><h2><FaLinkedinIn/></h2></li>
       <li><h2><FaFacebook/></h2></li>
       </ul>
       </div>
     </div>
  )
}

export default Ass1

