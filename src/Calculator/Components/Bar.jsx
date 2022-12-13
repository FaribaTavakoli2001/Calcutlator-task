import React, { Component } from "react";


class Bar extends Component {
  bar = () => {
    console.log("show Bar");
  };

  

  render() {
    return (
      <div className="bar">
        <form className="Switch">
          🌑
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              for="flexSwitchCheckDefault"
            >☀️
            </label>
          </div>
        </form>
        <h4> ماشین حساب مهندسی</h4>
      </div>
      //  </div>
    );
  }
}

export default Bar;
