import React, { useState } from 'react';

function UploadCloth() {
  const [clothData, setClothData] = useState({
    image: null,
    description: '',
    size: ''
  });

  const handleImageChange = e => {
    setClothData({ ...clothData, image: e.target.files[0] });
  };

  const handleChange = e => {
    setClothData({ ...clothData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', clothData.image);
    formData.append('description', clothData.description);
    formData.append('size', clothData.size);
    
    // Send cloth data to backend for upload
    console.log('Uploading cloth...', formData);
  };

  return (
    <div>
      <h2>Upload Cloth</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={clothData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          value={clothData.size}
          onChange={handleChange}
          required
        />
        <button type="submit">Upload Cloth</button>
      </form>
    </div>
  );
}

export default UploadCloth;
