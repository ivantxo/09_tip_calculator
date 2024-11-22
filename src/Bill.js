function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>{" "}
      <span>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </span>
      <br />
      <br />
    </div>
  );
}

export default Bill;
