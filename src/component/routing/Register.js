import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Assignment.css';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function handleForm(newObj) {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
        }
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="card w-25">
        <h2 className="card-title text-center text-dark">Register</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="us">UserName</label>
            <input 
              type="text" 
              {...register('username', { required: 'UserName is required' })} 
              className="form-control" 
            />
            {errors.username && <p className="text-danger">{errors.username.message}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="pas">Password</label>
            <input 
              type="password" 
              {...register('pass', { 
                required: 'Password is required', 
                minLength: { value: 6, message: 'Password must be at least 6 characters long' } 
              })} 
              className="form-control" 
            />
            {errors.pass && <p className="text-danger">{errors.pass.message}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="em">Email</label>
            <input 
              type="email" 
              {...register('email', { 
                required: 'Email is required', 
                pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: 'Invalid email format' }
              })} 
              className="form-control" 
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>
          <div className="text-center">
            <button className="btn btn-success w-50 mt-3">Register</button>
          </div>
        </form>
        <p className="text-center mt-3 text-white">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;



