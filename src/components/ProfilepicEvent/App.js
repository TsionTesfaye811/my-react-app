import React from 'react';
import pic from '../../assets/pic.jpg';  // Adjust the path based on your folder structure

function ProfilepicEvent() {
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <img 
      onClick={handleClick} 
      src={pic} 
      alt="profile image" 
      className="cursor-pointer rounded-full border-4 border-purple-600 shadow-lg max-w-xs mx-auto"
    />
  );
}

export default ProfilepicEvent;
