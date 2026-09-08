"use strict";

const selectFiniteValues = require("./lib/select-finite-values.js");

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
  const finiteValues = selectFiniteValues(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  let mean = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];
    const scaledMean = mean / (index + 1);
    const scaledValue = value / (index + 1);

    if (Math.sign(mean) !== Math.sign(value) && Math.abs(mean) === Math.abs(value)) {
      mean = 0;
      continue;
    }

    mean = mean - scaledMean + scaledValue;
  }

  return mean;
}

module.exports = { sum, average };
