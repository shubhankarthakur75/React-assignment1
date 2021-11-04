import React, { Component } from "react";
import "./DisplayButton.css";

class DisplayButton extends Component {
  render() {
    return (
      <div className={`btn ${this.props.propsClassName}`}>
        <button onClick={this.props.propsDisplayFunction}>
          <h3>{this.props.propsButtonText}</h3>
        </button>
      </div>
    );
  }
}

export default DisplayButton;
