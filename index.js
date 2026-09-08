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
  const selectedValues = finiteValues(values);

  if (selectedValues.length === 0) {
    return 0;
  }

  let total = 0;
  let compensation = 0;

  for (const value of selectedValues) {
    const adjustedValue = value - compensation;
    const nextTotal = total + adjustedValue;

    compensation = (nextTotal - total) - adjustedValue;
    total = nextTotal;
  }

  if (!Number.isFinite(total)) {
    return selectedValues[0] + (selectedValues[selectedValues.length - 1] - selectedValues[0]) / 2;
  }

  return total / selectedValues.length;
}

module.exports = { sum, average };
