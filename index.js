"use strict";

const finiteValues = require("./lib/finite-values.js");

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
  const numbers = finiteValues(values);

  if (numbers.length === 0) {
    return 0;
  }

  const mean = numbers.reduce((currentMean, value, index) => currentMean + (value - currentMean) / (index + 1), 0);
  return Object.is(mean, -0) ? 0 : mean;
}

module.exports = { sum, average };
