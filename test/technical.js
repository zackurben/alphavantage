'use strict';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
const alpha = require('../')();

test(`sma data works`, () => {
  expect.assertions(9);
  return alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Simple Moving Average (SMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: SMA']).toBeDefined();
  });
});
