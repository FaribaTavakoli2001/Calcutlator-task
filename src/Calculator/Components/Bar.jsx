import React, { Component } from "react";
import bootstrap from "react-bootstrap";

class Bar extends Component {
  bar = () => {
    console.log("show Bar");
  };

  handleOnClick = () => {
    console.log("dark & light mode");
  };
  render() {
    return (
      <div className="bar">
        <div className="theme" class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
        <h4> ماشین حساب مهندسی</h4>
      </div>
      //  </div>
    );
  }
}

export default Bar;
