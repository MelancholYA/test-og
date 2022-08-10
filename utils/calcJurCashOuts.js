const calcJur = (operation) => {
  if (operation.operation.currency !== "EUR")
    return console.log("\x1b[31m%s\x1b[0m", "Invalid currency");
  if (operation.operation.amount < 0.5)
    return console.log("\x1b[31m%s\x1b[0m", "Amount is below minimum");
  operation.commision = (operation.operation.amount * 0.3) / 100;
  return operation;
};

module.exports = calcJur;
