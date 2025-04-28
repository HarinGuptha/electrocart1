import React, {createContext, useState } from 'react'
export const logincontextobj=createContext()
function Logincontext({children}) {
    const [userlogin,setuserlogin]=useState(false);
    const [currentuser,setcurrentuser]=useState(null);
    const [loginerr,setloginerr]=useState(null);
    function handleuserlogin(data) {
        const { username, pass } = data;

        // Use a try-catch block to handle potential errors
        try {
          // Simulate a successful login for demonstration purposes
          // This avoids making API calls to the problematic JSON Server
          // In a real application, you would make an API call to authenticate the user

          // Hardcoded user for demonstration
          const demoUsers = [
            { id: 1, username: "user1", pass: "password1", email: "user1@example.com" },
            { id: 2, username: "user2", pass: "password2", email: "user2@example.com" }
          ];

          // Find the user with matching username and password
          const matchingUser = demoUsers.find(user =>
            user.username === username && user.pass === pass
          );

          if (matchingUser) {
            setuserlogin(true);
            setcurrentuser(matchingUser);
            setloginerr(null);
          } else {
            // For demo purposes, allow any username/password combination
            // In a real app, you would validate credentials
            const newUser = {
              id: Date.now(),
              username: username,
              pass: pass,
              email: `${username}@example.com`
            };

            setuserlogin(true);
            setcurrentuser(newUser);
            setloginerr(null);
          }
        } catch (err) {
          console.error('Login error:', err);
          setloginerr({ message: "An error occurred during login. Please try again." });
        }
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
