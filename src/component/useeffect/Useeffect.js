import React, { useEffect, useState } from 'react'

function Useeffect() {
   let [users,setUsers]=useState([])
   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(data=>data.json())
       .then(userList=>setUsers(userList))
       
   },[])
    useEffect(()=>{
     
    },[])
    console.log(users)
  return (
    <div>
     <h1 className='text-info display-4 text-center'>Side Efeects</h1>
     <div className='container'>
        <table className='table text-center'>
          <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map(userObj=><tr>
                    <td>{userObj.id}</td>
                    <td>{userObj.name}</td>
                    <td>{userObj.username}</td>
                    <td>{userObj.email}</td>
                </tr>)
            }
          </tbody>
        </table>

     </div>
    </div>
  )
}

export default Useeffect
