import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Assignment.css';
import './CustomStyles.css';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function handleForm(/* newObj */) {
    // Show success message
    alert('Registration successful! Redirecting to login page...');

    // Simulate successful registration and redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 1000);

    // In a real application, you would use this code:
    /*
    // Ensure all data is properly encoded before sending
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
        }
      })
      .catch(err => {
        console.error('Registration error:', err);
        alert('An error occurred during registration. Please try again.');
      });
    */
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="row g-0">
              {/* Left side - Form */}
              <div className="col-md-7 order-md-1 order-2">
                <div className="card-body p-4 p-md-5">
                  <div className="mb-4">
                    <h3 className="fw-bold mb-3">Create Account</h3>
                    <div>
                      <span className="text-muted">Already a member? </span>
                      <Link to="/login" className="text-primary fw-bold">Sign In</Link>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(handleForm)}>
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
                          placeholder="Choose a username"
                          {...register('username', { required: 'Username is required' })}
                        />
                      </div>
                      {errors.username && (
                        <div className="text-danger small mt-1">{errors.username.message}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium" htmlFor="email">
                        Email Address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-envelope text-muted"></i>
                        </span>
                        <input
                          type="email"
                          id="email"
                          className={`form-control border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Enter your email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: 'Invalid email format' }
                          })}
                        />
                      </div>
                      {errors.email && (
                        <div className="text-danger small mt-1">{errors.email.message}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium" htmlFor="password">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-lock text-muted"></i>
                        </span>
                        <input
                          type="password"
                          id="password"
                          className={`form-control border-start-0 ${errors.pass ? 'is-invalid' : ''}`}
                          placeholder="Create a password"
                          {...register('pass', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                          })}
                        />
                      </div>
                      {errors.pass && (
                        <div className="text-danger small mt-1">{errors.pass.message}</div>
                      )}
                      <div className="form-text mt-1">
                        <i className="bi bi-info-circle me-1"></i> Password must be at least 6 characters
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terms" />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to the <Link to="#" onClick={(e) => e.preventDefault()} className="text-primary">Terms</Link> and <Link to="#" onClick={(e) => e.preventDefault()} className="text-primary">Privacy Policy</Link>
                        </label>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-custom-primary py-2 fw-medium">
                        <i className="bi bi-person-plus me-2"></i>Create Account
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

              {/* Right side - Image */}
              <div className="col-md-5 order-md-2 order-1 d-none d-md-block">
                <div className="bg-primary h-100 d-flex flex-column justify-content-center text-white p-4"
                  style={{
                    background: 'linear-gradient(135deg, #f72585, #7209b7)',
                    backgroundSize: 'cover'
                  }}>
                  <div className="p-4">
                    <h2 className="fw-bold mb-4">Join Our Community</h2>
                    <p className="mb-4">Create an account to start shopping for the best electronic components and enjoy exclusive benefits.</p>
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-tag fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">Exclusive Deals</h6>
                        <small className="opacity-75">Special offers for members</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-truck fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">Free Shipping</h6>
                        <small className="opacity-75">On orders over $50</small>
                      </div>
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

export default Register;



