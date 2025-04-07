import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './UserProfile.css'; 

function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle the button click
  const goHome = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="user-profile">
      <h5 className="mt-3 px-3">Hi {username} 👋</h5>
      <h4 className="mt-5 px-3">
        {username}, Here are the most searched products on our website. Take a look 👀
      </h4>

      {/* Button to go home */}
      <button className="go-home-btn mx-3" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
}

export default UserProfile;







