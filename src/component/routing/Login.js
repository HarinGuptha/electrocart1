import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logincontextobj } from '../contexts/Logincontext';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleuserlogin, userlogin, currentuser, loginerr } = useContext(logincontextobj);
  const navigate = useNavigate();

  useEffect(() => {
    if (userlogin === true) {
      navigate(`/userprofile/${currentuser.username}`);
    }
  }, [userlogin, navigate, currentuser]);

  const onSubmit = (data) => {
    handleuserlogin(data);
  };
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='card w-25'>
        <h1 className='card-title text-center text-dark'>Login</h1>
        {loginerr !== null && <p className='text-danger text-center fs-2'>{loginerr.message}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className='form-label text-dark' htmlFor='us'>UserName</label>
            <input
              type='text'
              className='form-control'
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <p className='text-danger'>{errors.username.message}</p>}
          </div>
          
          <div>
            <label className='form-label text-dark' htmlFor='pas'>Password</label>
            <input
              type='password'
              className='form-control'
              {...register('pass', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters long' }
              })}
            />
            {errors.pass && <p className='text-danger'>{errors.pass.message}</p>}
          </div>
          
          <div className='text-center'>
            <button className='btn btn-success mt-2'>Login</button>
          </div>
        </form>
        <p className='text-center mt-3 text-white'>No Account? 
          <Link to='/register'> Register </Link> Here
        </p>
      </div>
    </div>
  );
}

export default Login;




