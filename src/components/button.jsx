import { Component } from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Button;
