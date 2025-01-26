import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items, onChoose }) => {
  if (!items || items.length === 0) {
    return <p>No items to display!</p>;
  }

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} onChoose={onChoose} />
      ))}
    </div>
  );
};

export default ItemList;
