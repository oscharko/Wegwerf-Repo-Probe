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

  let mean = 0;

  for (let index = 0; index < filteredValues.length; index += 1) {
    const value = filteredValues[index];
    const delta = value - mean;

    if (!Number.isFinite(delta)) {
      mean = value / (index + 1) + (mean * index) / (index + 1);
      continue;
    }

    const adjustment = delta / (index + 1);

    if (!Number.isFinite(adjustment)) {
      mean = value / (index + 1) + (mean * index) / (index + 1);
      continue;
    }

    mean += adjustment;
  }

  return mean;
}

module.exports = { sum, average };
