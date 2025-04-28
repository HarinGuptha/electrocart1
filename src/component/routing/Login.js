import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { logincontextobj } from '../contexts/Logincontext';
import './CustomStyles.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleuserlogin, userlogin, currentuser, loginerr } = useContext(logincontextobj);
  const navigate = useNavigate();

  useEffect(() => {
    if (userlogin === true) {
      // Redirect to home page after successful login
      navigate('/');
    }
  }, [userlogin, navigate, currentuser]);

  const onSubmit = (data) => {
    handleuserlogin(data);
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="row g-0">
              {/* Left side - Image */}
              <div className="col-md-5 d-none d-md-block">
                <div className="bg-primary h-100 d-flex flex-column justify-content-center text-white p-4"
                  style={{
                    background: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
                    backgroundSize: 'cover'
                  }}>
                  <div className="p-4">
                    <h2 className="fw-bold mb-4">Welcome Back!</h2>
                    <p className="mb-4">Log in to access your account and continue shopping for the best electronic components.</p>
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-shield-check fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">Secure Login</h6>
                        <small className="opacity-75">Your data is protected</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-lightning-charge fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">Fast Checkout</h6>
                        <small className="opacity-75">Quick and easy process</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Login Form */}
              <div className="col-md-7">
                <div className="card-body p-4 p-md-5">
                  <div className="mb-4">
                    <h3 className="fw-bold mb-3">Sign In</h3>
                    <div>
                      <span className="text-muted">New user? </span>
                      <Link to="/register" className="text-primary fw-bold">Create Account</Link>
                    </div>
                  </div>

                  {loginerr !== null && (
                    <div className="alert alert-danger" role="alert">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                      {loginerr.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label className="form-label fw-medium" htmlFor="username">
                        Username
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-person text-muted"></i>
                        </span>
                        <input
                          type="text"
                          id="username"
                          className={`form-control border-start-0 ${errors.username ? 'is-invalid' : ''}`}
                          placeholder="Enter your username"
                          {...register('username', { required: 'Username is required' })}
                        />
                      </div>
                      {errors.username && (
                        <div className="text-danger small mt-1">{errors.username.message}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="d-flex flex-column">
                        <label className="form-label fw-medium" htmlFor="password">
                          Password
                        </label>
                        <div className="text-end mb-2">
                          <Link to="#" className="text-primary small" onClick={(e) => e.preventDefault()}>Forgot password?</Link>
                        </div>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-lock text-muted"></i>
                        </span>
                        <input
                          type="password"
                          id="password"
                          className={`form-control border-start-0 ${errors.pass ? 'is-invalid' : ''}`}
                          placeholder="Enter your password"
                          {...register('pass', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                          })}
                        />
                      </div>
                      {errors.pass && (
                        <div className="text-danger small mt-1">{errors.pass.message}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-custom-primary py-2 fw-medium">
                        <i className="bi bi-box-arrow-in-right me-2"></i>Sign In
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-4">
                    <div className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <hr className="flex-grow-1" />
                        <span className="mx-3 text-muted small">OR</span>
                        <hr className="flex-grow-1" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{width: '35px', height: '35px', padding: '0'}}>
                        <i className="bi bi-google"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{width: '35px', height: '35px', padding: '0'}}>
                        <i className="bi bi-facebook"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{width: '35px', height: '35px', padding: '0'}}>
                        <i className="bi bi-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;




