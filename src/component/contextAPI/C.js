import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CreateContext'
function C() {
    let [counter,setcounter]=useContext(CounterContext)
  return (
    <div className='bg-secondary p-5'>
      <h1>COMPONENT-C</h1>
      <p>counter:{counter}</p>
      <button className='btn btn-light' onClick={()=>setcounter(counter+1)}>change</button>
    </div>
  )
}

export default C
