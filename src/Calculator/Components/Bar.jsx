import React, { Component } from "react";

class Bar extends Component {
  bar = () => {
    console.log("show Bar");
  };

  render() {
    return (
      <div className="bar">
        <form>
        <label className="switch">
          <input type="checkbox"  />
          <span className="slider round"></span>
        </label>
        </form>
        <h4> ماشین حساب مهندسی</h4>
      </div>
      //  </div>
    );
  }
}

export default Bar;
