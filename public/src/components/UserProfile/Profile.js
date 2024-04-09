import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      {/* Display user profile information */}
      <p>Username: JohnDoe</p>
      <p>Email: johndoe@example.com</p>
      <p>Address: 123 Street, City, Country</p>
      <Link to="/edit-profile">Edit Profile</Link>
    </div>
  );
}

export default Profile;
