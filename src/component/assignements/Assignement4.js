import React, { useState, useEffect } from 'react';
import Assignement41 from './Assignement41';
import './Assignement4.css'
function Assignment4() {
 let [data,setdata]=useState(0)
     function Increment(){
     setdata(data+1)
  }
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.slice(0,4)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return(
    <div className='text-center'>
        <div>
        <h1 className='btn rounded-4 mt-5 pt-3 btn-success text-dan text-center mb-5'>{data}</h1>
        </div>
        {
            users.map(userobj=>(
                <div className=' d-inline-block mx-4 text-center bg mt-5'>
                <h4 key={userobj.id}>{userobj.name}</h4>
                <h6 key={userobj.id}>{userobj.username}</h6>
                <h5 key={userobj.id}>{userobj.email}</h5>
                <h5 key={userobj.id}>{userobj.website}</h5>
               <Assignement41 func={Increment}></Assignement41>
                </div>
            ))
        }
    </div>
  );
}

export default Assignment4;

