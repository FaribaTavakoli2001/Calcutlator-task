import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {

   handleOnClick=() => {
    console.log('deleted');
   };
   
  render() {
<<<<<<< HEAD
    const { calculates  , handleDelete } = this.props;
=======
    const { calculates  , handleDelete} = this.props;
>>>>>>> 9a68dd705b9c6221f17737d6da928e863994ddad

   

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    

    return (
      <div className="history-container">
        <div className="space">
<<<<<<< HEAD
        <h5 className="delete" onClick={handleDelete}><b>پاک کردن</b></h5>
        <h5 className="name"><b>تاریخچه محاسبات</b></h5>
=======
        <h4 className="delete" onClick={handleDelete}>پاک کردن</h4>
        <h5 className="name">تاریخچه محاسبات</h5>
>>>>>>> 9a68dd705b9c6221f17737d6da928e863994ddad
        </div>
        
        
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}

        {calculates.length === 0 ? <h5 className="NoHistory"><b>تاریخچه ای وجود ندارد</b></h5>  : ""}
      </div>
    );
  }
}
