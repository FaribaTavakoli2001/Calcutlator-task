import "./App.css";
import Calculator from "./Calculator/Calculator";
// import History from "./Calculator/Components/History";
import Bar from "./Calculator/Components/Bar";

function App() {
  return (
    <div>
      <Bar/>
    {/* <div className="container"> */}
      <Calculator title="alaki" 
      />
      {/* <History
        calculates={[
          "    ",
          "    ",
          "    ",
          "    ",
          "    ",
          "    ",
          "    ",
          "    ",
        ]}
      /> */}
    </div>
    // </div>
  );
}

export default App;
