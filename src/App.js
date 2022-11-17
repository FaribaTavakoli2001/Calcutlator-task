import "./App.css";
import Calculator from "./Calculator/Calculator";
import History from "./Calculator/Components/History";

function App() {
  return (
    <div>
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
  );
}

export default App;
