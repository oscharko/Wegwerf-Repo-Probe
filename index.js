"use strict";

const finiteValues = require("./lib/finite-values");

/**
 * Sum a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/**
 * Average a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function average(values) {
  const { finiteValues: valuesToAverage, count } = finiteValues(values);

  if (count === 0) {
    return 0;
  }

  let mean = 0;

  for (const value of valuesToAverage) {
    if (mean === 0) {
      mean = value / count;
    } else {
      mean += value / count;
    }
  }

  return mean;
}

module.exports = { sum, average };
