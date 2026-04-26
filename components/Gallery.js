// filepath: src/components/Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <h1 className="gallery__title">Dynamic Image Gallery</h1>
        <p className="gallery__subtitle">
          Explore our collection of beautiful images
        </p>
        <div className="gallery__grid">
          {images.map((image, index) => (
            <ImageCard key={image.id || index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;