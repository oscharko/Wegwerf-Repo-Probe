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
  const valuesToAverage = finiteValues(values);

  if (valuesToAverage.length === 0) {
    return 0;
  }

  let mean = valuesToAverage[0];

  for (let index = 1; index < valuesToAverage.length; index += 1) {
    const value = valuesToAverage[index];
    const count = index + 1;

    if (mean === value) {
      continue;
    }

    if (mean === -value && count === 2) {
      mean = 0;
      continue;
    }

    mean += value / count - mean / count;
  }

  return mean;
}

module.exports = { sum, average };
