import React from 'react'
import { useContext } from 'react';
import { countercontextobj } from '../contexts/CreateContext';
function Reac() {
  const {counter,setcounter}=useContext(countercontextobj)
  return (
    <div>
      <h1>React</h1>
      <h1>counter:{counter}</h1>
      <button className='btn btn-danger' onClick={()=>setcounter(counter-1)}>Decrement</button>
    </div>
  )
}

export default Reac;
