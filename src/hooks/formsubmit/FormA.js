import React from 'react';
import { useForm } from 'react-hook-form';

function FormA() {

  let { register, handleSubmit, formState: { errors } } = useForm();

  function handleformsubmit(userObj) {
     console.log(userObj);
  }
  
  return (
    <div className="container card w-25 mt-5">
      <form className='mx-auto' onSubmit={handleSubmit(handleformsubmit)}>
        <h3>Registration Form</h3>
        <div className="row">
          <div className="col-6 form-group">
            <label className='mt-2 mb-2'>First Name</label>
            <input className='form-control' type='text' {...register('firstName', { required: true, minLength: 4, maxLength: 6 })}/>
            {errors.firstName?.type === 'required' && <span className='text-danger'>First Name is required</span>}
            {errors.firstName?.type === 'minLength' && <span className='text-danger'>First Name must be at least 4 characters</span>}
            {errors.firstName?.type === 'maxLength' && <span className='text-danger'>First Name should be 6 characters or less</span>}
          </div>

          <div className="col-6 form-group">
            <label className='mt-2 mb-2'>Last Name</label>
            <input className='form-control' type='text' {...register('lastName', { required: true })}/>
            {errors.lastName?.type === 'required' && <span className='text-danger'>Last Name is required</span>}
            {errors.lastName?.type === 'minLength' && <span className='text-danger'>Last Name must be at least 4 characters</span>}
            {errors.lastName?.type === 'maxLength' && <span className='text-danger'>Last Name should be 6 characters or less</span>}
          </div>
        </div>

        <div className="row">
          <div className="col-6 form-group">
            <label className='mt-2 mb-2'>Birthday</label>
            <input className='form-control' type='date' {...register('birthday', { required: true })}/>
            {errors.birthday && <span className='text-danger'>Birthday is required</span>}
          </div>

          <div className="col-6 form-group">
            <label className='mt-2 mb-2'>Gender</label>
            <div className='d-flex'>
              <div className="form-check">
                <input className='form-check-input' type='radio' value="male" {...register('gender', { required: true })} />
                <label className='form-check-label'>Male</label>
              </div>
              <div className="form-check mx-3">
                <input className='form-check-input' type='radio' value="female" {...register('gender', { required: true })} />
                <label className='form-check-label'>Female</label>
              </div>
            </div>
            {errors.gender && <span className='text-danger'>Gender is required</span>}
          </div>
        </div>

        <div className='row'>
          <div className="form-group col-6">
            <label className='mt-2 mb-2'>Email</label>
            <input className='form-control' type='text' {...register('email', { required: true })} />
            {errors.email && <span className='text-danger'>Email is required</span>}
          </div>
        
          <div className="form-group col-6">
            <label className='mt-2 mb-2'>Phone Number</label>
            <input className='form-control' type='text' {...register('phone',{required:true,maxLength:10})}/>
            {errors.phone && <span className='text-danger'>Phone Number Required</span>}
            {errors.phone?.type==='maxLength' && <span className='text-danger'>Phone number should be of 10 numbers</span>}
          </div>
        </div>

        <div className="form-group">
          <label className='mt-2 mb-2'>Subject</label>
          <select className="form-control" {...register('subject', { required: true })}>
            <option value="">Choose Option</option>
            <option value="telugu">Telugu</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>
          {errors.subject && <span className='text-danger'>Subject is required</span>}
        </div>

        <button className='btn btn-success mt-3 mb-3'>Submit</button>
      </form>
    </div>
  );
}

export default FormA;





