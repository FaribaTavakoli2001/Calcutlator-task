
import React, { Component } from "react";
import History from "./Components/History";


class Calculator extends Component {
  state = {
    Calculator: "Hi",
    calcText: "",
    historyText: [],
  };

  handleButton = (value) => {
    console.log("clicked", value);
    const calcText = this.state.calcText + value;
    this.setState({ ...this.state, calcText });
    console.log(this.state, calcText);
    // document.getElementById("calc").value += value;
  };

  handleCalculator = () => {
  let  historyText = this.state.historyText;
  historyText.push (this.state.calcText);
  this.setState({calcText: ""});
  };
 
  handleDeleteItem = (c) => {
    let historyText = this.state.historyText ;
    const index = historyText.findIndex((item) => item ===c );
    historyText.splice(index,1);
    this.setState({historyText});
  };

  handleChange = ({ target }) => { 
    // this.setState({ ...this.state, calcText: target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="formstyle">
            <form className="form1">
              <input
                id="calc"
                type="text"
                name="answer"
                value={this.state.calcText}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type="button"
                value="1"
                onClick={() => this.handleButton("1")}
              />
              <input
                type="button"
                value="2"
                onClick={() => this.handleButton("2")}
              />
              <input
                type="button"
                value="3"
                onClick={() => this.handleButton("3")}
              />
              <input
                type="button"
                value="+"
                onClick={() => this.handleButton("+")}
              />
              <input
                type="button"
                value="("
                onClick={() => this.handleButton("(")}
              />
              <input
                type="button"
                value="sin"
                onClick={() => this.handleButton("sin")}
              />
              <br />
              <input
                type="button"
                value="4"
                onClick={() => this.handleButton("4")}
              />
              <input
                type="button"
                value="5"
                onClick={() => this.handleButton("5")}
              />
              <input
                type="button"
                value="6"
                onClick={() => this.handleButton("6")}
              />
              <input
                type="button"
                value="-"
                onClick={() => this.handleButton("-")}
              />
              <input
                type="button"
                value=")"
                onClick={() => this.handleButton(")")}
              />
              <input
                type="button"
                value="cos"
                onClick={() => this.handleButton("cos")}
              />
              <br />
              <input
                type="button"
                value="7"
                onClick={() => this.handleButton("7")}
              />
              <input
                type="button"
                value="8"
                onClick={() => this.handleButton("8")}
              />
              <input
                type="button"
                value="9"
                onClick={() => this.handleButton("9")}
              />
              <input
                type="button"
                value="*"
                onClick={() => this.handleButton("*")}
              />
              <input
                type="button"
                value="^"
                onClick={() => this.handleButton("^")}
              />
              <input
                type="button"
                value="tan"
                onClick={() => this.handleButton("tan")}
              />
              <br />
              <input
                id="dot"
                type="button"
                value="."
                onClick={() => this.handleButton(".")}
              />
              <input
                type="button"
                value="0"
                onClick={() => this.handleButton("0")}
              />
              <input
                type="button"
                value="/"
                onClick={() => this.handleButton("/")}
              />
              <input
                type="button"
                value="="
                onClick={() => this.handleCalculator()}
              />
              <input
                type="button"
                value="log"
                onClick={() => this.handleButton("log")}
              />
              <input
                type="button"
                value="R"
                onClick={() => this.handleButton("R")}
              />
              <input
                className="clear"
                type="button"
                value="clear"
                k
                onClick={() => this.setState({ calcText: "" })}
              />
              <br />
            </form>
          </div>
          <History 
          calculates={this.state.historyText}
          handleDeleteItem={this.handleDeleteItem}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
