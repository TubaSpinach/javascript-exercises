const convertToCelsius = function(deg) {
  let dirtyCalc = (deg-32)*5/9;
  return parseFloat(dirtyCalc.toFixed(1));
};

const convertToFahrenheit = function(deg) {
  let dirtyCalc = (deg*9/5)+32;
  return parseFloat(dirtyCalc.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
