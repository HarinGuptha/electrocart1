import React from 'react'
import { useForm } from 'react-hook-form'

function AddTask(props) {
    let {register,handleSubmit}=useForm();
    function handleform(taskObj){
      const exist = props.task.find(tasks => tasks.addask === taskObj.addask);
      if (exist) 
        taskObj.addask = `${taskObj.addask}_dummyname`;
      props.settask([...props.task,taskObj])
    }

  return (
    <div>
      <p className='lead fs-1 text-center bg-black text-info m-2'>Add Task</p>
      <form onSubmit={handleSubmit(handleform)}>
      <input type='text'placeholder='   Enter UserName' className='form-control mb-4 w-50 ' {...register('addask')}/>
      <input type='text'placeholder='        Enter Age' className='form-control mb-4 w-50 ' {...register('addas')}/>
      <button className='btn btn-success d-block mb-2 text-white'>ADD</button>
      </form>
    </div>
    
  )
}

export default AddTask
