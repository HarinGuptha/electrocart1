import React from 'react';
function Child(props) {
   return (
      <div>
         <button className='btn btn-danger mx-3' onClick={props.fun}>Decrement</button>
         <button className='btn btn-success' onClick={props.func}>Increment</button>
      </div>
   );
}

export default Child;


