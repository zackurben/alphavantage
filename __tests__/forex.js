'use strict';

import { setTimeout } from 'node:timers/promises';
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

jest.setTimeout(30000);
jest.unmock('cross-fetch');
const TIME = 1000;

test(`forex rate works`, () => {
  expect.assertions(3);
  return setTimeout(TIME)
    .then(() => alpha.forex.rate('btc', 'USD'))
    .then((data) => {
      expect(data['Realtime Currency Exchange Rate']).toBeDefined();
      expect(data['Realtime Currency Exchange Rate']['1. From_Currency Code']).toEqual('BTC');
      expect(data['Realtime Currency Exchange Rate']['3. To_Currency Code']).toEqual('USD');
    });
});

test(`forex intraday works`, () => {
  expect.assertions(3);
  return setTimeout(TIME)
    .then(() => alpha.forex.intraday('USD', 'EUR', '60min'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['2. From Symbol']).toEqual('USD');
      expect(data['Meta Data']['3. To Symbol']).toEqual('EUR');
    });
});

test(`forex daily works`, () => {
  expect.assertions(3);
  return setTimeout(TIME)
    .then(() => alpha.forex.daily('USD', 'EUR'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['2. From Symbol']).toEqual('USD');
      expect(data['Meta Data']['3. To Symbol']).toEqual('EUR');
    });
});

test(`forex weekly works`, () => {
  expect.assertions(3);
  return setTimeout(TIME)
    .then(() => alpha.forex.weekly('USD', 'EUR'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['2. From Symbol']).toEqual('USD');
      expect(data['Meta Data']['3. To Symbol']).toEqual('EUR');
    });
});

test(`forex monthly works`, () => {
  expect.assertions(3);
  return setTimeout(TIME)
    .then(() => alpha.forex.monthly('USD', 'EUR'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['2. From Symbol']).toEqual('USD');
      expect(data['Meta Data']['3. To Symbol']).toEqual('EUR');
    });
});
