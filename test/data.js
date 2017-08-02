'use strict';

const alpha = require('../')({
  key: 'demo'
});

test(`intraday data works`, () => {
  expect.assertions(2);
  return alpha.data.intraday(`msft`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Time Series (1min)']).toBeDefined();
  });
});
