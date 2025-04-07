import React, {createContext, useState } from 'react'
export const logincontextobj=createContext()
function Logincontext({children}) {
    const [userlogin,setuserlogin]=useState(false);
    const [currentuser,setcurrentuser]=useState(null);
    const [loginerr,setloginerr]=useState(null);
    function handleuserlogin(data) {
        const { username, pass } = data;
        fetch(`http://localhost:3000/users?username=${username}&password=${pass}`, { method: "GET" })
          .then(res => res.json())
          .then(users => {
            const matchingUser = users.find(user => user.username === username && user.pass === pass);
            if (matchingUser) {
              setuserlogin(true)
              setcurrentuser(matchingUser)
              setloginerr(null)
            } else {
              setloginerr({ message: "Invalid username or password" });
            }
          })
          .catch(err => setloginerr(err));
      }
    function userlogout(){
      setcurrentuser(null);
      setuserlogin(false);
      setloginerr(null)
    }
  return (
    <logincontextobj.Provider value={{handleuserlogin,userlogout,userlogin,currentuser,loginerr,setcurrentuser}}>
        {children}
    </logincontextobj.Provider>
  )
}
export default Logincontext
