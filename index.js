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
  const filteredValues = finiteValues(values);

  if (filteredValues.length === 0) {
    return 0;
  }

  const total = filteredValues.reduce((runningTotal, value) => runningTotal + value / filteredValues.length, 0);

  if (Object.is(total, -0)) {
    return 0;
  }

  if (total === 0) {
    return 0;
  }

  return total;
}

module.exports = { sum, average };
