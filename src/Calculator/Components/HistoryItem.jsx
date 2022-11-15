import React from "react";

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
