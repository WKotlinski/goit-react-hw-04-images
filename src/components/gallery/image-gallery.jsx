import { Component } from "react";
import ImageGalleryItem from "./image-gallery-item";
import css from "./gallery.module.css";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

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
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      // Add other properties of the 'image' object as needed
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
