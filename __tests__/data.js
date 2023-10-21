'use strict';

import { setTimeout } from 'node:timers/promises';
import Alpha from '..';
const alpha = Alpha({ key: process.env.AV_KEY });

jest.setTimeout(30000);
jest.unmock('cross-fetch');
const TIME = 1000;

test(`intraday data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.intraday(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (1min)']).toBeDefined();
    });
});

test(`daily data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.daily(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Daily)']).toBeDefined();
    });
});

test(`daily adjusted data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.daily_adjusted(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series (Daily)']).toBeDefined();
    });
});

test(`weekly data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.weekly(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Weekly Time Series']).toBeDefined();
    });
});

test(`weekly adjusted data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.weekly_adjusted(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Weekly Adjusted Time Series']).toBeDefined();
    });
});

test(`monthly data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.monthly(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Monthly Time Series']).toBeDefined();
    });
});

test(`weekly adjusted data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.monthly_adjusted(`msft`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Monthly Adjusted Time Series']).toBeDefined();
    });
});

test(`global quote data works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.quote(`msft`))
    .then((data) => {
      expect(data['Global Quote']).toBeDefined();
      expect(data['Global Quote']['01. symbol']).toEqual('MSFT');
    });
});

test(`symbol search works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.data.search(`Advanced Micro Devices`))
    .then((data) => {
      expect(data['bestMatches']).toBeDefined();

      let map = {};
      data['bestMatches'].forEach((raw) => {
        map[raw['1. symbol']] = true;
      });
      expect(map['AMD']).toEqual(true);
    });
});
