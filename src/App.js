import "./App.css";
import Calculator from "./Calculator/Calculator";
import History from "./Calculator/Components/History";
import Bar from "./Calculator/Components/Bar";

function App() {
  return (
    <div>
      <Bar/>
    <div className="container">
      <Calculator title="alaki" 
      />
      <History
        calculates={[
          "2+3=5",
          "2*4=8",
          "2+3=5",
          "2*4=8",
          "2+3=5",
          "2*4=8",
          "2+3=5",
          "2*4=8",
          "2+3=5",
          "2*4=8",
          "2+3=5",
          "2+3=5",
          "2*4=8",
        ]}
      />
    </div>
    </div>
  );
}

export default App;
