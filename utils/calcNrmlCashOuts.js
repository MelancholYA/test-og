const moment = require("moment");
const groupBy = require("./groupBy");

const calcNrmlOuts = (usersOps) => {
  const groupByUser = Object.values(groupBy(usersOps, "user_id"));
  groupByUser.forEach((userOps) => {
    userOps.sort((a, b) => moment(a.date) - moment(b.date));
    const checkArr = (arr) => {
      let initOut = 0;
      return arr.map((operation, index, array) => {
        let startDateWeek = moment(array[0].date).isoWeek();
        const operationDateWeek = moment(operation.date).isoWeek();
        if (operationDateWeek === startDateWeek) {
          initOut += operation.operation.amount;

          if (initOut > 1000) {
            operation.commision =
              operation.operation.amount > 1000
                ? ((operation.operation.amount - 1000) * 0.3) / 100
                : (operation.operation.amount * 0.3) / 100;
          } else {
            operation.commision = 0;
          }
        } else {
          startDateWeek = moment(operation.date).isoWeek();
          initOut = 0;
          initOut += operation.operation.amount;
          if (initOut > 1000) {
            operation.commision =
              ((operation.operation.amount - 1000) * 0.3) / 100;
          } else {
            operation.commision = 0;
          }
        }
        return operation;
      });
    };

    checkArr(userOps);
  });
  return usersOps;
};

module.exports = calcNrmlOuts;
