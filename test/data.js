'use strict';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jest.unmock('request-promise-native');
const alpha = require('../')();
const delay = require('delay');
const TIME = 5000;

test(`intraday data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.intraday(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (1min)']).toBeDefined();
    });
});

test(`daily data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.daily(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Daily)']).toBeDefined();
    });
});

test(`daily adjusted data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.daily_adjusted(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Daily)']).toBeDefined();
    });
});

test(`weekly data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.weekly(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Weekly Time Series']).toBeDefined();
    });
});

test(`monthly data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.monthly(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Monthly Time Series']).toBeDefined();
    });
});
