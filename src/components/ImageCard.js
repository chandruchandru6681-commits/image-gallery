// filepath: src/components/ImageCard.js
import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <div className="image-card__image-container">
        <img 
          src={image.url} 
          alt={image.title} 
          className="image-card__image"
          loading="lazy"
        />
      </div>
      <div className="image-card__content">
        <h3 className="image-card__title">{image.title}</h3>
        <p className="image-card__description">{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;