import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
function FormAss() {
  let [users,setUsers]=useState([])
  let { register, handleSubmit, formState: { errors } } = useForm();
  function SubmitingForm(userObj) {
    setUsers([...users,userObj])
  }
  function deletedata(index){
    let copydata=[...users]
    copydata.splice(index,1)
    setUsers(copydata)
  }
return (
    <div>
      <form onSubmit={handleSubmit(SubmitingForm)}>
        <div className='w-50'> 
          <label>First Name</label>
          <input className='input' type='text'{...register('username', { required: true })}/>
          {errors.username?.type==='required' && <p className='text-danger'>First Name required</p>}
        </div>
        <div>
        <label>PassWord</label>
          <input className='input' type='password' placeholder='Password' {...register('password', { required: true })} />
        </div>
        <div>
          <label htmlFor='state'>Select State</label>
          <select className='form-select' {...register('state', { required: true })} defaultValue="">
            <option value='' disabled>Choose a State</option>
            <option value='ts'>TS</option>
            <option value='ap'>AP</option>
          </select>
          {errors.state?.type === 'required' && <p className='text-danger'>Please Select State</p>}
        </div>
        <div>
          <label>Choose Gender</label>
          <div>
            <input type='radio' id='m' className='form-check-input' value='male' {...register('gender', { required: true })} />
            <label htmlFor='m' className='form-check-label'>Male</label>
          </div>
          <div>
            <input type='radio' id='f' className='form-check-input' value='female' {...register('gender', { required: true })} />
            <label htmlFor='f' className='form-check-label'>Female</label>
          </div>
          </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
      <table className='table'>
        <thead>
          <tr>
            <th>UserName</th>
            <th>password</th>
            <th>State</th>
            <th>Gender</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {
          users.map((userOb,index)=><tr key={index}>
              <td>{userOb.username}</td>
              <td>{userOb.password}</td>
              <td>{userOb.state}</td>
              <td>{userOb.gender}</td>
              <td>
                <button className='btn btn-danger' onClick={deletedata}>Delete</button>
              </td>

          </tr>)
         }
        </tbody>
      </table>
    </div>
  );
}
export default FormAss;