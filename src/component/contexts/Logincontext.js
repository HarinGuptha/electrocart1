import React, {createContext, useState } from 'react'
export const logincontextobj=createContext()
function Logincontext({children}) {
    const [userlogin,setuserlogin]=useState(false);
    const [currentuser,setcurrentuser]=useState(null);
    const [loginerr,setloginerr]=useState(null);
    function handleuserlogin(data) {
        const { username, pass } = data;
        // Properly encode the parameters to prevent URI malformed errors
        const encodedUsername = encodeURIComponent(username);
        const encodedPassword = encodeURIComponent(pass);

        fetch(`http://localhost:3000/users?username=${encodedUsername}&password=${encodedPassword}`, { method: "GET" })
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
          .catch(err => {
            console.error('Login error:', err);
            setloginerr({ message: "An error occurred during login. Please try again." });
          });
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
