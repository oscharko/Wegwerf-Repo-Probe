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

  let offset = finiteValues[0];
  let adjustedTotal = 0;

  for (const value of finiteValues) {
    adjustedTotal += value - offset;
  }

  if (!Number.isFinite(adjustedTotal)) {
    offset = 0;
    adjustedTotal = sum(finiteValues);
  }

  return offset + adjustedTotal / finiteValues.length;
}

module.exports = { sum, average };
