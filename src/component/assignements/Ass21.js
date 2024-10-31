import React from 'react'
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
function Ass21() {
  return (
    <div className='pt-5 pb-5 mx-5'>
     <div className="card" style={{width: '22rem'}}>
       <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297_1280.jpg" alt="profile" />
       <div className="card-body">
         <h5 className="card-title">News App using ReactJS (Parsing XML RSS feed to JSON)</h5>
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

export default Ass21
