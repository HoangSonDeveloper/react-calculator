import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import React, { Component } from "react";
import { calculate } from "./ultils/calculate";

class App extends Component {
  state = {
    value: null,
    operation: null,
    total: null,
  };

  handlerButtonClick = (btnName) => {
    this.setState(calculate(this.state, btnName));
    console.log(calculate(this.state, btnName));
  };
  render() {
    const { value, total } = this.state;
    return (
      <div className="App">
        <Display value={value || total || "0"} />
        <Buttons onButtonClick={this.handlerButtonClick} />
      </div>
    );
  }
}

export default App;
