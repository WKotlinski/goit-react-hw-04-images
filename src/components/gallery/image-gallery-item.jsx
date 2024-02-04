import { useState } from "react";
import css from "./gallery.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick(image.largeImageURL);
  };

  return (
    <li className={css["gallery-item"]} onClick={handleClick}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
