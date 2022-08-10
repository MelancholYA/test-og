const calcNrmlOuts = require("../utils/calcNrmlCashOuts");

const arr = [
  {
    date: "2016-01-06",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 30000, currency: "EUR" },
  },
  {
    date: "2016-01-07",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 1000.0, currency: "EUR" },
  },
  {
    date: "2016-01-07",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 100.0, currency: "EUR" },
  },
];

const result = [
  {
    date: "2016-01-06",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 30000, currency: "EUR" },
    commision: 87.0,
  },
  {
    date: "2016-01-07",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 1000.0, currency: "EUR" },
    commision: 3.0,
  },
  {
    date: "2016-01-07",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 100.0, currency: "EUR" },
    commision: 0.3,
  },
];

test("calculate comission for natural cash outs", () => {
  expect(calcNrmlOuts(arr)).toEqual(result);
});
