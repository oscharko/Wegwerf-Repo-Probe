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
  const filteredValues = finiteValues(values);

  if (filteredValues.length === 0) {
    return 0;
  }

  let mean = filteredValues[0];
  for (let index = 1; index < filteredValues.length; index += 1) {
    const previousWeight = index / (index + 1);
    const currentWeight = 1 / (index + 1);
    mean = (mean * previousWeight) + (filteredValues[index] * currentWeight);
  }

  return mean;
}

module.exports = { sum, average };
