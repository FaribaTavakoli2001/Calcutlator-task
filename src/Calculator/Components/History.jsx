import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {

   handleOnClick=() => {
    console.log('deleted');
   };
   
  render() {
    const { calculates } = this.props;

   

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    

    return (
      <div className="history-container">
        <div className="space">
        <h4 className="delete" onClick={this.handleOnClick}>پاک کردن</h4>
        <h4 >تاریخچه محاسبات</h4>
        </div>
        
        
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}
        <h4 className="NoHistory">تاریخچه ای وجود ندارد</h4>
      
      </div>
    );
  }
}
