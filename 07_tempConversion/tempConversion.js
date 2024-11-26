const convertToCelsius = function(farenheit) {
  // The Formula for converting F to C is F - 32 / 1.8
  let celsius = (farenheit - 32) / 1.8;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  // The Formula for converting C to F is C * 1.8 + 32
  let farenheit = (celsius * 1.8) + 32;
  return Number(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
