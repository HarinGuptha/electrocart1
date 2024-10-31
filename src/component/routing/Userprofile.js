import React from 'react';
import { useParams } from 'react-router-dom';
function UserProfile() {
  const { username } = useParams(); 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 p-4 text-center">
        <h2>User Profile</h2>
        <p className="mt-3">Welcome, {username}!</p>
      </div>
    </div>
  );
}
export default UserProfile;



