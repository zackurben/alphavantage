'use strict';

import Alpha from '..';
const env = process.env;

// Clear the current environment variables for testing.
process.env = {};

test(`initialization without a config throws an error`, () => {
  expect(() => Alpha()).toThrow(`Missing Alpha Vantage config settings: key`);
});

test(`initialization without an api key throws an error`, () => {
  expect(() => Alpha()).toThrow(`Missing Alpha Vantage config settings: key`);
});
