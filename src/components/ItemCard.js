import React from 'react';

const ItemCard = ({ item, onChoose }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button className="choose-btn" onClick={() => onChoose(item)}>
        Choose
      </button>
    </div>
  );
};

export default ItemCard;
