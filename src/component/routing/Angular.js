import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Angular() {
  return (
    <div>
      <Link className='text-black text-decoration-none nav-link' to='angular1'>Angular1</Link>
      <Outlet/>
    </div>
  )
}

export default Angular;
