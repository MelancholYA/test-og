const groupBy = (array, key) => {
  if (!Array.isArray(array)) return console.log("Please provide an array");
  return array.reduce((result, value) => {
    (result[value[key]] = result[value[key]] || []).push(value);
    return result;
  }, {});
};
module.exports = groupBy;
