import React, { Component } from "react";


class Calculator extends Component {
  state = {
    Calculator: "Hi",
    calcText: "",
    // historyText: [],
  };

  handleButton = (value) => {
    const calcText = this.state.calcText + value;
    this.setState({ ...this.state, calcText });
    console.log(this.state, calcText);
  };

  // handleDeleteItem = (c) => {
  //   let historyText = this.state.historyText;
  //   const index = historyText.findIndex((item) => item === c);
  //   historyText.splice(index, 1);
  //   this.setState({ historyText });
  // };

  handleChange = ({ target }) => {
    // this.setState({ ...this.state, calcText: target.value });
  };

  render() {
    /* return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        method="post"
        action="/"
      ></form>
    ); */

    return (
      <div>
        <div className="formstyle">
          <div className="form1">
            <input
              id="calc"
              type="text"
              name="answer"
              value={this.state.calcText}
              onChange={this.handleChange}
            />
            <button value="1"onClick={() => this.handleButton("1")}>1</button>
            <button value="2" onClick={() => this.handleButton("2")}>2</button>
            <button value="3" onClick={() => this.handleButton("3")}>
              3
            </button>
            <button value="+" onClick={() => this.handleButton("+")}>
              +
            </button>
            <button value="(" onClick={() => this.handleButton("(")}>
              {"("}
            </button>
            <button value="sin" onClick={() => this.handleButton("sin")}>
              sin
            </button>
            <button value="4" onClick={() => this.handleButton("4")}>
              4
            </button>
            <button value="5" onClick={() => this.handleButton("5")}>
              5
            </button>
            <button value="6" onClick={() => this.handleButton("6")}>
              6
            </button>
            <button value="-" onClick={() => this.handleButton("-")}>
              -
            </button>
            <button value=")" onClick={() => this.handleButton(")")}>
              )
            </button>
            <button value="cos" onClick={() => this.handleButton("cos")}>
              cos
            </button>
            <button value="7" onClick={() => this.handleButton("7")}>
              7
            </button>
            <button value="8" onClick={() => this.handleButton("8")}>
              8
            </button>
            <button value="9" onClick={() => this.handleButton("9")}>
              9
            </button>
            <button value="*" onClick={() => this.handleButton("*")}>
              *
            </button>
            <button value="^" onClick={() => this.handleButton("^")}>
              ^
            </button>
            <button value="tan" onClick={() => this.handleButton("tan")}>
              tan
            </button>
            <button id="dot" value="." onClick={() => this.handleButton(".")}>
              .
            </button>
            <button value="0" onClick={() => this.handleButton("0")}>
              0
            </button>
            <button value="/" onClick={() => this.handleButton("/")}>
              /
            </button>
            <button
              value="="
              onClick={() => {
                this.props.handleCalculator(this.state.calcText)
              }}
            >
              =
            </button>
            <button value="log" onClick={() => this.handleButton("log")}>
              log
            </button>
            <button value="R" onClick={() => this.handleButton("R")}>
              R
            </button>
            <button
              className="clear"
              value="clear"
              onClick={() => this.setState({ calcText: "" })}
            >
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
