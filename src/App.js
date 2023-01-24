import "./App.css";
import Calculator from "./Calculator/Calculator";
import History from "./Calculator/Components/History";
import Bar from "./Calculator/Components/Bar";
import React from "react";

class App extends React.Component {
  state = {
    historyItems: [],
  };

  handleCalculator = (result) => { 
    this.setState({
      ...this.state,
      historyItems: [...this.state.historyItems, result],
    });
  };

  handleDelete = () => {
    this.setState({ historyItems: [] });
  };

  handleDeleteItem = (c) => {
    let historyItems = this.state.historyItems;
    const index = historyItems.findIndex((item) => item === c);
    historyItems.splice(index , 1);
    this.setState({ historyItems });
  };

  render() {
    return (
      <div>
        <Bar />
        <div className="container">
          <Calculator 
          title="alaki" 
          handleCalculator={this.handleCalculator}
           />
          <History
            calculates={this.state.historyItems}
            handleDelete={this.handleDelete}
            handleDeleteItem={this.handleDeleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
