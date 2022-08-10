const groupBy = require("../utils/groupBy");

const testArray = [
  {
    name: "yacine",
    occupation: "developer",
  },
  {
    name: "omar",
    occupation: "developer",
  },
  {
    name: "ali",
    occupation: "desiger",
  },
];

const TestResult = {
  desiger: [
    {
      name: "ali",
      occupation: "desiger",
    },
  ],
  developer: [
    {
      name: "yacine",
      occupation: "developer",
    },
    {
      name: "omar",
      occupation: "developer",
    },
  ],
};

test("group array of objects by key", () => {
  expect(groupBy(testArray, "occupation")).toEqual(TestResult);
});
