import React, { useState } from 'react';
import SwapForm from '../components/SwapForm';
import ItemList from '../components/ItemList';

const Swap = () => {
  const [items, setItems] = useState([
    {
      name: 'Red Party Dress',
      description: 'Beautiful red dress worn once.',
      image: '/images/red-dress.jpg',
    },
    {
      name: 'Black Tuxedo',
      description: 'Perfect for formal events.',
      image: '/images/black-tuxedo.jpg',
    },
  ]);

  const addItem = (item) => {
    setItems([...items, item]); // Add new items dynamically
  };

  return (
    <div className="swap">
      <h1>Swap Clothes</h1>
      <SwapForm addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
};

export default Swap;
