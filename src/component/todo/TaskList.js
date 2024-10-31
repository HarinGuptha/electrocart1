import React from 'react';

function TaskList(props) {
  return (
    <div>
      <p className='lead fs-1 text-center bg-black text-info m-2'>Task List</p>
      {
        props.task.map((taskObj, index) => (
          <div key={index}>
            <p className='lead'>UserName: {taskObj.addask}</p>
            <p className='lead'>Age: {taskObj.addas}</p>
          </div>
        ))
      }
    </div>
  );
}

export default TaskList;

