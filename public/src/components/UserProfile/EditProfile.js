import React, { useState } from 'react';

function EditProfile() {
  const [formData, setFormData] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    address: '123 Street, City, Country'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Update profile logic
    console.log('Updating profile...', formData);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
