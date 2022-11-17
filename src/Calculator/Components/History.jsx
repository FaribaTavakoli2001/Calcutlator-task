import React, { Component } from "react";
import HistoryItem from "./HistoryItem";

export default class History extends Component {
  render() {
    const { calculates } = this.props;

    const handleOnClice=() => {
      console.log("Delete")
    }

    const handleOnItemClicked = (c) => {
      console.log("clicked", c);
    };

    return (
      <div className="history-container">
        <div className="space">
        <h4>history of compoting</h4>
        <button className="deldete" onClick={this.handleOnClice}>Delete</button>
        </div>
        

        {calculates.map((c, index) => (
          <HistoryItem key={index} onClick={handleOnItemClicked} formula={c} />
        ))}
        
      </div>
    );
  }
}
