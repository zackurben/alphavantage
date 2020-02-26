'use strict';

import delay from 'delay';
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jest.unmock('cross-fetch');
const TIME = 1000;

test(`forex data works`, () => {
  expect.assertions(3);
  return delay(TIME)
    .then(() => alpha.forex.rate('btc', 'usd'))
    .then(data => {
      expect(data['Realtime Currency Exchange Rate']).toBeDefined();
      expect(data['Realtime Currency Exchange Rate']['1. From_Currency Code']).toEqual('BTC');
      expect(data['Realtime Currency Exchange Rate']['3. To_Currency Code']).toEqual('USD');
    });
});
