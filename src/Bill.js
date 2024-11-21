import { useState } from "react";

function Bill() {
  const [bill, setBill] = useState("");

  return (
    <div>
      <span>How much was the bill?</span>{" "}
      <span>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </span>
      <br />
      <br />
    </div>
  );
}

export default Bill;
