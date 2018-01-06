'use strict';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jest.unmock('request-promise-native');
const alpha = require('../')();
const delay = require('delay');
const TIME = 5000;

test(`intraday crypto works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.crypto.intraday('btc', 'usd'))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Digital Currency Intraday)']).toBeDefined();
    });
});
