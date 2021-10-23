'use strict';

import delay from 'delay';
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

jest.setTimeout(30000);
jest.unmock('cross-fetch');
const TIME = 1000;

test(`monthly data works`, () => {
  expect.assertions(2);
  return delay(TIME)
    .then(() => alpha.experimental('CRYPTO_INTRADAY', { symbol: 'ETH', market: 'USD', interval: '5min' }))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Time Series Crypto (5min)']).toBeDefined();
    });
});
