"use strict";

/**
 * Select only finite numbers from a list of values.
 * @param {number[]} values
 * @returns {{ count: number, finiteValues: number[] }}
 */
function finiteValues(values) {
  const finiteNumbers = [];

  for (const value of values) {
    if (Number.isFinite(value)) {
      finiteNumbers.push(value);
    }
  }

  return { count: finiteNumbers.length, finiteValues: finiteNumbers };
}

module.exports = finiteValues;
