import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TaskCount from './TaskCount'
import Delete from './Dee'
import { useState } from 'react'
function ManageList() {
  let [task,settask]=useState([])
  return (
    <div>
      <h1 className='text-center display-1'>TO DO LIST</h1>
      <div className='row'>
        <div className='col-sm-4 border mx-5 w-25'> <AddTask settask={settask} task={task}/></div>
         <div className='col-sm-4 border w-25 mx-5'><TaskList task={task}/></div>
        <div className='col-sm-4 border w-25 mx-5'><TaskCount task={task}/></div>
          <div className=''><Delete settask={settask} task={task}/></div>
      </div>
    </div>
  )
}

export default ManageList
