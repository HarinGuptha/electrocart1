import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CreateContext'
function D() {
    let [counter,setcounter]=useContext(CounterContext)
  return (
    <div className='bg-success p-5'>
      <h1>COMPONENT-D</h1>
      <p>counter:{counter}</p>
      <button className='btn btn-light' onClick={()=>setcounter(counter+1)}>change</button>
    </div>
  )
}

export default D
