import React, { Component } from "react";

class Calculator extends Component {
  state = {
    Calculator: "salam",
  };

  handleOnClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Ok</button>
        <div className="formstyle">
          <form name="form1">
            <input id="calc" type="text" name="answer" /> <br />
            <br />
            <input
              type="button"
              value="1"
              onclick="form1.answer.value += '1' "
            />
            <input
              type="button"
              value="2"
              onclick="form1.answer.value += '2' "
            />
            <input
              type="button"
              value="3"
              onclick="form1.answer.value += '3' "
            />
            <input
              type="button"
              value="+"
              onclick="form1.answer.value += '+' "
            />
            <input
              type="button"
              value="("
              onclick="form1.answer.value += '(' "
            />
            <input
              type="button"
              value="sin"
              onclick="form1.answer.value += 'sin' "
            />
            <br />
            <input
              type="button"
              value="4"
              onclick="form1.answer.value += '4' "
            />
            <input
              type="button"
              value="5"
              onclick="form1.answer.value += '5' "
            />
            <input
              type="button"
              value="6"
              onclick="form1.answer.value += '6' "
            />
            <input
              type="button"
              value="-"
              onclick="form1.answer.value += '-' "
            />
            <input
              type="button"
              value=")"
              onclick="form1.answer.value += ')' "
            />
            <input
              type="button"
              value="cos"
              onclick="form1.answer.value += 'cos' "
            />
            <br />
            <input
              type="button"
              value="7"
              onclick="form1.answer.value += '7' "
            />
            <input
              type="button"
              value="8"
              onclick="form1.answer.value += '8' "
            />
            <input
              type="button"
              value="9"
              onclick="form1.answer.value += '9' "
            />
            <input
              type="button"
              value="*"
              onclick="form1.answer.value += '*' "
            />
            <input
              type="button"
              value="^"
              onclick="form1.answer.value += '^' "
            />
            <input
              type="button"
              value="tan"
              onclick="form1.answer.value += 'tan' "
            />
            <br />
            <input
              type="button"
              value="."
              onclick="form1.answer.value += '.' "
            />
            <input
              type="button"
              value="0"
              onclick="form1.answer.value += '0' "
            />
            <input
              type="button"
              value="/"
              onclick="form1.answer.value += '/' "
            />
            <input
              type="button"
              value="="
              onclick="form1.answer.value = eval(form1.answer.value) "
            />
            <input
              type="button"
              value="log"
              onclick="form1.answer.value += 'log' "
            />
            <input
              type="button"
              value="  "
              onclick="form1.answer.value += ' ' "
            />
            <br />
            <input
              type="button"
              value="C"
              onclick="form1.answer.value = ' ' "
              id="clear"
            />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
