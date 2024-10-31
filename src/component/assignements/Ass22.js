import React from 'react'
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
function Ass22() {
  return (

       <div className='pt-5 pb-5 mx-5'>
     <div className="card" style={{width: '22rem'}}>
       <img className="card-img-top" src="https://imageio.forbes.com/specials-images/imageserve/5ffca623a629b75c1717b82e/Choosing-a-business-name/960x0.jpg?format=jpg&width=960" alt="profile" />
       <div className="card-body">
         <h5 className="card-title">Medium Like Blogging App Using Angular 9 and Firebase</h5>
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

export default Ass22
