import React, { Component } from "react";

const btnStyle = {
  backgroundColor: "red",
  display: "block",
};

class Calculator extends Component {
  state = {
    Calculator: 'salam',
  };

  handleOnClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <button
          style={{
            width: 100,
            height: 35,
            backgroundColor: "dodgerblue",
            color: "white",
          }}
          onClick={this.handleOnClick}
        >
          Ok
        </button>
      </div>
    );
  }
}

export default Calculator;
