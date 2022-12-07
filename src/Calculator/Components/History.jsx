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
        <h5 >تاریخچه محاسبات</h5>
        </div>
        
        
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}
        <h5 className="NoHistory">تاریخچه ای وجود ندارد</h5>
      
      </div>
    );
  }
}
