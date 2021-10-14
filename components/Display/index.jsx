import React, { Component } from "react";
import "./Display.scss";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="badge">
          <div className="border">Hoang Son's calculator</div>
        </div>
        {this.props.value}
      </div>
    );
  }
}

export default Display;
