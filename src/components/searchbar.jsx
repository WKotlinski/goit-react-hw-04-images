import { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleSubmit = (eve) => {
    eve.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
