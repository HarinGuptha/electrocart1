import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Assignment.css';

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleForm(newObj) {
    fetch('http://localhost:5000/users', {
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 p-4 bg-warning">
        <h2 className="card-title text-center text-dark">Register</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="us">UserName</label>
            <input type="text" {...register('username')} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="pas">Password</label>
            <input type="password" {...register('pass')} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark" htmlFor="em">Email</label>
            <input type="text" {...register('email')} className="form-control" />
          </div>
          <div className='text-center'><button className="btn btn-success w-25 mt-3">Register</button></div>
        </form>
        <p className="text-center mt-3 text-secondary">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;


