const calcJur = require("../utils/calcJurCashOuts");

const operation1 = {
  date: "2016-01-06",
  user_id: 2,
  user_type: "juridical",
  type: "cash_out",
  operation: { amount: 300.0, currency: "EUR" },
};
const result1 = {
  date: "2016-01-06",
  user_id: 2,
  user_type: "juridical",
  type: "cash_out",
  operation: { amount: 300.0, currency: "EUR" },
  commision: 0.9,
};

test("calculate comission for cash ins", () => {
  expect(calcJur(operation1)).toEqual(result1);
});
