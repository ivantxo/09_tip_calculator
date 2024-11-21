import Bill from "./Bill";
import Output from "./Output";
import Percentage from "./Percentage";
import ResetApp from "./ResetApp";

function App() {
  return (
    <div>
      <Bill />
      <Percentage label="How did you like the service?" />
      <Percentage label="How did your friend like the service?" />
      <Output />
      <ResetApp />
    </div>
  );
}

export default App;
