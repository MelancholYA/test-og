//dependencies
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
const calcCashIn = require("./utils/calcCashIn");
const calcJur = require("./utils/calcJurCashOuts");
const calcNrmlOuts = require("./utils/calcNrmlCashOuts");
const groupBy = require("./utils/groupBy");

// message colors
const red = "\x1b[31m%s\x1b[0m";
const yellow = "\x1b[33m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";

const filePath = process.argv.slice(2)[0];

const followPath = async (path) => {
  if (!path) return console.log(red, "Please provide a file path");
  if (path.startsWith("http")) {
    await axios(path)
      .then((res) => calcs(res.data))
      .catch((err) => {
        return console.log(red, "couldn't fetch file : " + err.message);
      });

    return;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      return console.log(red, "couldn't read file " + err.message);
    }
    try {
      calcs(JSON.parse(data));
    } catch (error) {
      console.log(red, "Invalid JSON file", error);
    }
  });
};

const calcs = (dataArray) => {
  if (!Array.isArray(dataArray)) {
    return console.log(red, "Provided data isn't an array");
  }
  console.log(yellow, "calculating...");

  //group by operation type
  let cashOuts = groupBy(dataArray, "type")["cash_out"];
  let cashIns = groupBy(dataArray, "type")["cash_in"];

  //group by user type
  let naturalCashOuts = groupBy(cashOuts, "user_type")["natural"];
  let juridicallCashOuts = groupBy(cashOuts, "user_type")["juridical"];

  let juridicallCashOuts_calculated = juridicallCashOuts.map((opertaion) =>
    calcJur(opertaion)
  );
  let cashIns_calculated = cashIns.map((opertaion) => calcCashIn(opertaion));

  let naturalCashouts_calculated = calcNrmlOuts(naturalCashOuts);

  let result = juridicallCashOuts_calculated
    .concat(cashIns_calculated, naturalCashouts_calculated)
    .sort((a, b) => moment(a.date) - moment(b.date));

  result.map((opertaion) => console.log(green, opertaion.commision));
  console.log(yellow, "done");
};

followPath(filePath);
