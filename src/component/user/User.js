import React from 'react';
import x from '../../images/virat.avif';
import './User.css';
function User(props) {
  return (
    <div className='card mt-3 mx-2 text-center'>
     <img src={x} alt='' className='w-75 rounded-5 mx-5 mt-2'/>
      <div className='card-body'>
         <p className='lead '>{props.userData.name}</p>
         <p className='lead '>{props.userData.age}</p>
         <p className='lead '>{props.userData.email}</p>
      </div>
    </div>
  )
}

export default User
