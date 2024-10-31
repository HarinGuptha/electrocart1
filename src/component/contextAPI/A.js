import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import B from './B'
import { CounterContext } from '../contexts/CreateContext'
function A() {
   let [counter,setcounter] = useContext(CounterContext)
   let users=useContext(UserContext)
  return (
    <div className='bg-primary p-5'>
     <h1>COMPONENT-A</h1>
     <p>counter :{counter}</p>
     <button className='btn btn-light' onClick={()=>setcounter(counter+1)}>change</button>
    {
        users.map(userobj=><p key={userobj.id}>{userobj.name}</p>)
    }
     <B/> 
    </div>
  )
}

export default A
