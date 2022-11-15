import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {
  render() {
    const { calculates } = this.props;

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    return (
      <div className="history-container">
        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}
      </div>
    );
  }
}
