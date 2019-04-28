'use strict';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jest.unmock('request-promise-native');
const alpha = require('../')();
const delay = require('delay');
const TIME = 1000;

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

test(`weekly adjusted data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.weekly_adjusted(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Weekly Adjusted Time Series']).toBeDefined();
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

test(`weekly adjusted data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.monthly_adjusted(`msft`))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Monthly Adjusted Time Series']).toBeDefined();
    });
});

test(`global quote data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.quote(`msft`))
    .then(data => {
      expect(data['Global Quote']).toBeDefined();
      expect(data['Global Quote']['01. symbol']).toEqual('MSFT');
    });
});

test(`symbol search works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.data.search(`Advanced Micro`))
    .then(data => {
      expect(data['bestMatches']).toBeDefined();
      expect(data['bestMatches'][0]['1. symbol']).toEqual('AMD');
    });
});

test(`batch data works`, () => {
  expect.assertions(9);
  return delay(TIME)
    .then(() => alpha.data.batch('MSFT,FB,AAPL'))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Stock Quotes']).toBeDefined();
      expect(data['Stock Quotes'].length).toEqual(3);
      data['Stock Quotes'].forEach(quote => {
        expect(quote['1. symbol']).toBeDefined();
      });
      expect(data['Stock Quotes'][0]['1. symbol']).toEqual('MSFT');
      expect(data['Stock Quotes'][1]['1. symbol']).toEqual('FB');
      expect(data['Stock Quotes'][2]['1. symbol']).toEqual('AAPL');
    });
});

test(`batch data works with array input`, () => {
  expect.assertions(9);
  return delay(TIME)
    .then(() => alpha.data.batch(['MSFT', 'FB', 'AAPL']))
    .then(data => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Stock Quotes']).toBeDefined();
      expect(data['Stock Quotes'].length).toEqual(3);
      data['Stock Quotes'].forEach(quote => {
        expect(quote['1. symbol']).toBeDefined();
      });
      expect(data['Stock Quotes'][0]['1. symbol']).toEqual('MSFT');
      expect(data['Stock Quotes'][1]['1. symbol']).toEqual('FB');
      expect(data['Stock Quotes'][2]['1. symbol']).toEqual('AAPL');
    });
});
