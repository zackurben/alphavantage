'use strict';

import delay from 'delay';
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

jest.setTimeout(30000);
jest.unmock('cross-fetch');
const TIME = 1000;

test(`sector performance data works`, () => {
  expect.assertions(11);
  return delay(TIME)
    .then(() => alpha.performance.sector())
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Rank A: Real-Time Performance']).toBeDefined();
      expect(data['Rank B: 1 Day Performance']).toBeDefined();
      expect(data['Rank C: 5 Day Performance']).toBeDefined();
      expect(data['Rank D: 1 Month Performance']).toBeDefined();
      expect(data['Rank E: 3 Month Performance']).toBeDefined();
      expect(data['Rank F: Year-to-Date (YTD) Performance']).toBeDefined();
      expect(data['Rank G: 1 Year Performance']).toBeDefined();
      expect(data['Rank H: 3 Year Performance']).toBeDefined();
      expect(data['Rank I: 5 Year Performance']).toBeDefined();
      expect(data['Rank J: 10 Year Performance']).toBeDefined();
    });
});
