"use strict";

const selectFiniteNumbers = require("./lib/selectFiniteNumbers.js");

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
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  let mean = 0;
  let count = 0;

  for (const value of finiteValues) {
    count += 1;
    const weight = 1 / count;

    mean = mean * (1 - weight) + value * weight;
  }

  return Object.is(mean, -0) ? 0 : mean;
}

module.exports = { sum, average };
