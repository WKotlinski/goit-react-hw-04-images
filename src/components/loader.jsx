import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <ThreeDots color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
