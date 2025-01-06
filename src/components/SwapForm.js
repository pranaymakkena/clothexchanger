import React, { useState } from 'react';

const SwapForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && image) {
      addItem({ name, description, image });
      setName('');
      setDescription('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="swap-form">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default SwapForm;
