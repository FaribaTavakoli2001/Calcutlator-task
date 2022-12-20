import React, { Component } from "react";

class Bar extends Component {
  bar = () => {
    console.log("show Bar");
  };

  render() {
    return (
      <div className="bar">
        <div>
        <label className="switch">
          <input type="checkbox"  />
          <span className="slider round"></span>
        </label>
        </div>
        <h4><b>ماشین حساب مهندسی</b></h4>
      </div>
      //  </div>
    );
  }
}

export default Bar;
