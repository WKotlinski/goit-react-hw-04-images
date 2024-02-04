import { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
