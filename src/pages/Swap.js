import React, { useState } from 'react';

const Swap = () => {
  const [items, setItems] = useState([
    {
      title: 'Red Party Dress',
      description: 'Elegant red dress for a party. Worn only once.',
      image: 'images/red-dress.jpg'
    },
    {
      title: 'Black Tuxedo',
      description: 'Stylish black tuxedo. Slightly worn.',
      image: 'images/black-tuxedo.webp'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]); // Add the new item to the list
    setFormData({ title: '', description: '', image: '' }); // Reset form fields
  };

  return (
    <div className="swap">
      <h2 className="swap-title">Swap Your Clothes</h2>

      <div className="swap-form">
        <h3 className="form-title">Add an Item for Swapping</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Clothing Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <button type="submit" className="form-button">Add Item</button>
        </form>
      </div>

      <div className="item-list">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p className="no-items">No items available for swapping.</p>
        )}
      </div>
    </div>
  );
};

export default Swap;
