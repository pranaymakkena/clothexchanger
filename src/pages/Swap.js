import React, { useState } from 'react';
import SwapForm from '../components/SwapForm';
import ItemList from '../components/ItemList';

const Swap = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
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
