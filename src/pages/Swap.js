import React, { useState } from 'react';
import SwapForm from '../components/SwapForm';
import ItemList from '../components/ItemList';
import mockItems from '../data/items';
const Swap = () => {
  const [items, setItems] = useState(mockItems); // Initialize with mock data

  const addItem = (item) => {
    setItems([...items, item]); // Add new items dynamically
  };

  return (
    <div className="swap">
      <h1>Swap Clothes</h1>
      <SwapForm addItem={addItem} />
      <ItemList items={items} /> {/* Pass items to ItemList */}
    </div>
  );
};

export default Swap;
