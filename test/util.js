'use strict';

const alpha = require('../')();

test(`intraday data polishing works`, () => {
  expect.assertions(6);
  return alpha.data.intraday(`msft`).then(data => {
    const polished = alpha.util.polish(data);

    expect(data['Meta Data']).toBeDefined();
    expect(polished['Meta Data']).toBeUndefined();
    expect(polished['meta']).toBeDefined();
    expect(data['Time Series (1min)']).toBeDefined();
    expect(polished['Time Series (1min)']).toBeUndefined();
    expect(polished['data']).toBeDefined();
  });
});
