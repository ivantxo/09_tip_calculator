function Output({ bill, totalPercentage }) {
  const totalBill = bill + totalPercentage;
  return (
    <div style={{ fontWeight: "bold" }}>
      You pay {totalBill} ({bill} + {totalPercentage})
      <br />
      <br />
    </div>
  );
}

export default Output;
