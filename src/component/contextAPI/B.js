import React from 'react'
import C from './C'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CreateContext'
function B() {
    let [counter,setcounter]=useContext(CounterContext)
  return (
    <div className='bg-warning p-5'>
      <h1>COMPONENT-B</h1>
      <p>counter:{counter}</p>
      <button className='btn btn-light' onClick={()=>setcounter(counter+1)}>change</button>
      <C/>
    </div>
  )
}

export default B
