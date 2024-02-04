import React from "react";
import ImageGalleryItem from "./image-gallery-item";
import css from "./gallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
