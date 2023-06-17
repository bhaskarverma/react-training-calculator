import { useState } from "react";
import "./App.css";
import ResultDiv from "./components/ResultDiv";
import KeyPad from "./components/KeyPad";

function App() {
  const [result, setResult] = useState(0);

  return (
    <div>
      <ResultDiv result={result} />
      <KeyPad setResult={setResult} />
    </div>
  );
}

export default App;
