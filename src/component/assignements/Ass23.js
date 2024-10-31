import React from 'react'
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
function Ass23() {
  return (
    <div className='pt-5 pb-5 mx-5'>
  <div className="card" style={{width: '22rem'}}>
    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWeV-OPD4LOtV9tI2GlmHVd-jiqwhrSPsNJ91WDDxHDK0qAJsOQIhfQwgCvkZ8SnYzi7c&usqp=CAU" alt="profile" />
    <div className="card-body">
        
      <h5 className="card-title">COVID 19 Tracker (Statistics) app Using Angular</h5>
      <p className="card-text">News App using ReactJS(Parsing XML to JSON) Photo by christina Morillo</p>
      <div className='d-flex mt-2'>
        <IoPerson className='mt-1'/>
        <p className=' text-center mx-2'>Mehul Kothari</p>
         </div>
         <div className='d-flex'>
        <SlCalender className='mt-1'/>
        <p className=' text-center mx-2'>Aug 12,2020 04:32</p>
         </div>
    </div>
  </div>
  
 </div>
  
  )
}

export default Ass23
