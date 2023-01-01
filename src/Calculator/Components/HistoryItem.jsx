import React from 'react';



const HistoryItem = ({ formula, onClick, handleDeleteItem }) => {
  const handleOnClick = () => {
    onClick("DeleteItems");
  };
  
    return (
      <div onClick={handleOnClick} className="history-item">
      {formula}
      {/* <div className='DeleteItem'  >
      🗑️
      </div> */}
      <span className="material-symbols-outlined"  onClick={handleDeleteItem}>
delete
</span>
    </div>
  );
};

export default HistoryItem; 
