import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Technologies() {
  return (
    <div>
      <Link className='nav-Link text-decoration-none text-danger' to='react'>React</Link>
      <Link className='nav-Link text-decoration-none text-danger' to='angular'>Angular</Link>
      <Link className='nav-Link text-decoration-none text-danger' to='vue'>Vue</Link>
      <Outlet/>
    </div>
  );
}

export default Technologies;


