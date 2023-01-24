import React from "react";

const HistoryItem = ({ formula, onClick, handleDeleteItem }) => {
  const handleOnClick = () => {
    onClick("");
  };

  return (
    <div onClick={handleOnClick} className="history-item">
      {formula}
      <span className="material-symbols-outlined" onClick={() => handleDeleteItem(formula)}>
        delete
      </span>
    </div>
  );
};

export default HistoryItem;
