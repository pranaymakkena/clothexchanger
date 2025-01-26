import React, { useState } from 'react';
import ItemList from '../components/ItemList';

const Swap = () => {
  const [items, setItems] = useState([
    { name: 'Black Tuxedo', description: 'Classic formal wear, perfect for events.', image: 'images/party1.jpg' },
    { name: 'White Blazer', description: 'Crisp, elegant, ideal for special occasions.', image: 'images/party2.jpg' },
    { name: 'Plum Kurta', description: 'Rich plum-colored kurta, traditional yet stylish.', image: 'images/party3.jpg' },
    { name: 'Purple Kurta Pyjama', description: 'Elegant purple kurta, comfortable and classy.', image: 'images/party4.jpg' },
    { name: 'Violet Blazer', description: 'Bold violet blazer, sophisticated and chic.', image: 'images/party5.jpg' },
    { name: 'Red Tuxedo', description: 'Standout red tuxedo, perfect for parties.', image: 'images/party6.jpg' },
    { name: 'Blue Silk Shirt', description: 'Luxurious blue silk shirt, smooth and elegant.', image: 'images/party13.jpg' },
    { name: 'Black Mermaid Gown', description: 'Sleek black gown, timeless and elegant.', image: 'images/party7.jpg' },
    { name: 'Brown Gown', description: 'Rich brown gown, sophisticated and chic.', image: 'images/party8.jpg' },
    { name: 'Pink Prom Dress', description: 'Elegant pink gown, graceful and charming.', image: 'images/party9.jpg' },
    { name: 'Pink Kurta Pyjama', description: 'Bright yellow kurta pyjama, festive and lively.', image: 'images/party10.jpg' },
    { name: 'Pink Kurta Pyjama', description: 'Soft pink kurta pyjama, traditional and stylish.', image: 'images/party11.jpg' },
    { name: 'Golden Saree', description: 'Shimmering golden saree, perfect for celebrations.', image: 'images/party12.jpg' },
    { name: 'Black Half Saree', description: 'Traditional black half saree, graceful and stylish.', image: 'images/party14.jpg' }
  ]);

  const [filteredItems, setFilteredItems] = useState(items);
  const [formData, setFormData] = useState({ name: '', description: '', image: '' });
  const [chosenItem, setChosenItem] = useState(null); // New state for chosen item

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...formData };
    setItems((prevItems) => [...prevItems, newItem]);
    setFilteredItems((prevItems) => [...prevItems, newItem]);
    setFormData({ name: '', description: '', image: '' });
  };

  const showMenItems = () => {
  setFilteredItems([...items.slice(0, 7)]);
};

const showWomenItems = () => {
  setFilteredItems([...items.slice(7, 14)]);
};

  const handleChoose = (item) => {
    setChosenItem(item); // Update the chosen item state
  };

  const closeModal = () => {
    setChosenItem(null); // Close the modal by resetting the chosen item
  };

  return (
    <div className="swap">
      <h2 className="swap-title">Swap Your Clothes</h2>
      
      <div className="swap-form">
        <h3 className="form-title">Add an Item for Swapping</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Clothing Name" value={formData.name} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
          <button type="submit" className="form-button">Add Item</button>
        </form>
      </div>
      
      <div className="category-buttons">
        <button onClick={showMenItems} className="category-btn">Men</button>
        <button onClick={showWomenItems} className="category-btn">Women</button>
      </div>
      
      <ItemList items={filteredItems} onChoose={handleChoose} />

      {/* Modal to display chosen item */}
      {chosenItem && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h3>Chosen Item</h3>
            <img src={chosenItem.image} alt={chosenItem.name} className="chosen-item-image" />
            <h4>{chosenItem.name}</h4>
            <p>{chosenItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Swap;
