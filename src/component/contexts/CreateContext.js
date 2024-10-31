import React, { createContext, useState } from 'react';
export const countercontextobj = createContext();
function CreateContext({ children }) { 
  const [counter, setcounter] = useState(100);
  return (
    <countercontextobj.Provider value={{ counter, setcounter }}>
      {children} 
    </countercontextobj.Provider>
  );
}
export default CreateContext;


