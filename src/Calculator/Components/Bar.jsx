import React, { Component } from "react";

class Bar extends Component {
  bar = () => {
    console.log("show Bar");
  };
  
  handleOnClick=() => {
 console.log("dark & light mode");

 };
  render() {
    return (
    <div className="bar">
      {/* <div className="icon"> */}
     <button className="icon" onClick={this.handleOnClick}>Them mode</button>
        <h2> ماشین حساب مهندسی</h2>
     </div>
    //  </div>

    )
  }
};



export default Bar;
