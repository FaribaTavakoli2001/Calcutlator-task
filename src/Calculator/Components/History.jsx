import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {

   handleOnClick=() => {
    console.log('deleted');
   };
   
  render() {
    const { calculates  , handleDeleteItem} = this.props;

   

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    

    return (
      <div className="history-container">
        <div className="space">
        <h4 className="delete" onClick={handleDeleteItem}>پاک کردن</h4>
        <h5 className="name">تاریخچه محاسبات</h5>
        </div>
        
        
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}

        {calculates.length === 0 ? <h5 className="NoHistory">تاریخچه ای وجود ندارد</h5> : ""}
      </div>
    );
  }
}
