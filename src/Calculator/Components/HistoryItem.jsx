import React, { Component } from 'react';
import Calculator from "../Calculator";
import history from "./History"

const handleshowcalctext = () => {
  console.log(123)
};

const HistoryItem = ({ formula, onClick }) => {
  const handleOnClick = () => {
    onClick(formula);
  };

  return (
    <div onClick={handleOnClick} className="history-item">
      {formula}
    </div>
  );
};

export default HistoryItem;
