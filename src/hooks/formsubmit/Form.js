import React, { useState } from 'react'

import { FaBeer } from 'react-icons/fa';
function Form() {
    let [username,setusername]=useState('')
    let [password,setPassword]=useState('')
    function handleUsername(event){
        setusername(event.target.value)
    }
    function handlePassword(event){
        setPassword(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(username)
        console.log(password)
    }
  return (
    <div>
      <form className=' w-50 mx-auto mt-5'onSubmit={handleSubmit}>
       <div className='mb-3'>
        <input type='text' name='username' className='form-control' placeholder='UserName' onChange={handleUsername}></input>
        </div>
        <div>
        <input type='password' name='password' className='form-control' placeholder='Password'onChange={handlePassword}></input>
        <button className='btn btn-success'>Submit</button>
     </div>
      </form>
<h1><FaBeer/></h1>
    </div>
  )
}
export default Form
