import { useState } from "react";
import Bill from "./Bill";
import Output from "./Output";
import Percentage from "./Percentage";
import ResetApp from "./ResetApp";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const totalPercentage =
    (bill / 2) * (percentage1 / 100) + (bill / 2) * (percentage2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Percentage
        label="How did you like the service?"
        bill={bill}
        percentage={percentage1}
        onPercentage={setPercentage1}
      />
      <Percentage
        label="How did your friend like the service?"
        bill={bill}
        percentage={percentage2}
        onPercentage={setPercentage2}
      />
      <Output bill={bill} totalPercentage={totalPercentage} />
      <ResetApp onReset={handleReset} />
    </div>
  );
}

export default App;
