import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {
  render() {
    const { calculates } = this.props;

    const handleOnClick=() => {
      console.log("nothing")
    }

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    const handleDelete=() => {
      console.log('Delete');
    };

    return (
      <div className="history-container">
        <div className="space">
        <h4 className="delete" onClick={this.handleOnClice}>پاک کردن</h4>
        <h4 >تاریخچه محاسبات</h4>
        </div>
        
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}
        <h4 className="cow" onClick={this.handleOnClick}>تاریخچه ای وجود ندارد</h4>
      
      </div>
    );
  }
}
