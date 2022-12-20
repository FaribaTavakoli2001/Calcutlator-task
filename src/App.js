import "./App.css";
import Calculator from "./Calculator/Calculator";
import History from "./Calculator/Components/History";
import Bar from "./Calculator/Components/Bar";
import React from "react";

class App extends React.Component {
  state = {
    historyItems: [],
  };

  handleCalculator = (text) => {
    console.log( "321");
    this.setState({ calcText: "" });
    this.setState({
      ...this.state,
      historyItems: [...this.state.historyItems,text],
    })

  };

  handleDelete = ( ) => {
 this.setState( { historyItems : []});
  };

  render() {
    return (
      <div>
        <Bar />
        <div className="container">
          <Calculator title="alaki" handleCalculator={this.handleCalculator} />
          <History calculates={this.state.historyItems}
          handleDelete = {this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;
