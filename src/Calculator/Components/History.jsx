import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {
  handleOnClick = () => {
    console.log("deleted");
  };

  render() {
    const { calculates, handleDelete, handleDeleteItem } = this.props;
    

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    return (
      <div className="history-container">
        <div className="space">
          <h5 className="delete" onClick={handleDelete}>
            <b>پاک کردن</b>
          </h5>
          <h5 className="name">
            <b>تاریخچه محاسبات</b>
          </h5>
        </div>

        {calculates.map((c, index) => (
          <HistoryItem
            handleDeleteItem={handleDeleteItem}
            key={index}
            onClick={handleOnItemClicked}
            formula={c}
          />
        ))}

        {calculates.length === 0 ? (<h5 className="NoHistory"><b>تاریخچه ای وجود ندارد</b></h5>) : ( "" ) }
      </div>
    );
  }
}
