import React from 'react'
import './Users.css'
import User from '../user/User'
function Users() {
    let usersList=[
        {
            name:'Harin Guptha',
            age:18,
            email:'saihari799@gmail.com'
        },
        {
            name:'Harin Guptha',
            age:16,
            email:'saihari799@gmail.com'
        },
        {
            name:'Harin Guptha',
            age:17,
            email:'saihari799@gmail.com'
        }
    ]
  return (
    <div>
        <div className='d-flex justify-content-between mt'>
      <User userData={usersList[0]}/>
      <User userData={usersList[1]}/>
      <User userData={usersList[2]}/>
    </div>
    </div>
  )
}

export default Users
