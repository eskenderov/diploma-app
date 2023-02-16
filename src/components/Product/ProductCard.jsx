import React from 'react';

const ProductCard = ({ title, price }) => {
  return (
    <div className="card product-card">
      <h5 className="product-card__title">{title}</h5>
    </div>
  );
};

export default ProductCard;
