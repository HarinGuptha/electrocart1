import React, { useState } from 'react';
import Child from '../child/Child';

function Parent() {
   let a = 10;
   let [data, setDataI] = useState(a);
   function Increment() {
      setDataI(data+1);
   }

   function Decrement() {
      setDataI(data-1);
   }

   return (
      <div>
         <h1 className='text-info'>Increment & Decrement Buttons</h1>
         <h1>{data}</h1>
               <Child func={Increment} fun={Decrement} />
      </div>
   );
}

export default Parent;


