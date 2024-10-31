import React from 'react'

function TaskCount(props) {
  return (
    <div>
      <p className='lead fs-1 text-center bg-dark text-info m-2'>Task Count</p>
      <p>{props.task.length}</p>
    </div>
  )
}

export default TaskCount
