import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {
  render() {
    const { calculates } = this.props;

    const handleOnClick=() => {
      console.log("Delete")
    }

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    return (
      <div className="history-container">
        <div className="space">
        <button className="delete" onClick={this.handleOnClice}>پاک کردن</button>
        <h4 >تاریخچه محاسبات</h4>
        </div>
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}
      
      </div>
    );
  }
}
