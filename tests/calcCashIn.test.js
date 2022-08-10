const calcCashIn = require("../utils/calcCashIn");

const operation1 = {
  date: "2016-01-05",
  user_id: 1,
  user_type: "natural",
  type: "cash_in",
  operation: { amount: 200.0, currency: "EUR" },
};
const operation2 = {
  date: "2016-01-05",
  user_id: 1,
  user_type: "natural",
  type: "cash_in",
  operation: { amount: 22200.0, currency: "EUR" },
};

const result1 = {
  date: "2016-01-05",
  user_id: 1,
  user_type: "natural",
  type: "cash_in",
  operation: { amount: 200.0, currency: "EUR" },
  commision: 0.06,
};
const result2 = {
  date: "2016-01-05",
  user_id: 1,
  user_type: "natural",
  type: "cash_in",
  operation: { amount: 22200.0, currency: "EUR" },
  commision: 5,
};

test("calculate comission for cash ins", () => {
  expect(calcCashIn(operation1)).toEqual(result1);
  expect(calcCashIn(operation2)).toEqual(result2);
});
