import { useState } from "react";

function Percentage({ label }) {
  const [percentage, setPercentage] = useState("");

  return (
    <div>
      <span>{label}</span>{" "}
      <span>
        <select
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="0">Disatisfied (0%)</option>
          <option value="5">It was ok (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </span>
      <br />
      <br />
    </div>
  );
}

export default Percentage;
