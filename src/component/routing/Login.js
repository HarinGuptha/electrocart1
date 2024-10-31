import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logincontextobj } from '../contexts/Logincontext';

function Login() {
  const { register, handleSubmit } = useForm();
  const {handleuserlogin,userlogin,currentuser,loginerr}=useContext(logincontextobj)
  const navigate = useNavigate();
  useEffect(()=>{
    if(userlogin===true){
      navigate(`/userprofile/${currentuser.username}`)
    }
  },[userlogin])
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='card w-50 p-4 bg-warning'>
      <h1 className='card-title text-center text-dark'>Login</h1>
      {loginerr !== null && <p className='text-warning text-center fs-2'>{loginerr.message}</p>}
      <form  onSubmit={handleSubmit(handleuserlogin)}>
        <div>
          <label className='form-label text-dark' htmlFor='us'>UserName</label>
          <input type='text' className='form-control' {...register('username')} />
        </div>
        <div>
          <label className='form-label text-dark' htmlFor='pas'>Password</label>
          <input type='password' className='form-control' {...register('pass')} />
        </div>
        <div className='text-center'>
        <button className='btn btn-success mt-2'>Login</button>
        </div>
      </form>
      <p className='text-center mt-3 text-secondary'>No Account? 
        <Link to='/register'> Register </Link> Here
      </p>
    </div>
    </div>
  );
}
export default Login;



