import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} className="product-image" />
      
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description.substring(0, 100)}...</p>
    </div>
  );
};

export default ProductCard;
