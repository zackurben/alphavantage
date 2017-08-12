'use strict';

const env = process.env;
const Alpha = require('../');

// Clear the current environment variables for testing.
process.env = {};

test(`initialization without a config throws an error`, () => {
  expect.assertions(1);
  try {
    const alpha = Alpha();
  } catch (e) {
    expect(e.message).toEqual(`Missing Alpha Vantage config settings: key`);
  }
});

test(`initialization without an api key throws an error`, () => {
  expect.assertions(1);
  try {
    const alpha = Alpha({});
  } catch (e) {
    expect(e.message).toEqual(`Missing Alpha Vantage config settings: key`);
  }
});

test(`initialization without an api key, but with env key works`, () => {
  expect.assertions(1);
  try {
    process.env = env;
    const alpha = Alpha();
    expect(alpha).toBeDefined();
  } catch (e) {
    expect(e).toBeUndefined();
  }
});
