import React, { useState } from 'react'

function Useeffect2() {
    let [users,setUsersData]=useState([])
    function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data=>data.json())
        .then(userData=>setUsersData(userData))
    }
  return (
    <div>
      <button class='btn btn-success' onClick={fetchData}>Get Users</button>
      <div className='container'>
        {
          users.length===0 ? (<p className=' text-bg-danger'>No Users</p>) :( <table className='table text-center'>
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
          </table> )
         
}
     </div>

    </div>
  )
}

export default Useeffect2
