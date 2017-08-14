'use strict';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
const alpha = require('../')();

test(`intraday data works`, () => {
  expect.assertions(2);
  return alpha.data.intraday(`msft`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Time Series (1min)']).toBeDefined();
  });
});

test(`daily data works`, () => {
  expect.assertions(2);
  return alpha.data.daily(`msft`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Time Series (Daily)']).toBeDefined();
  });
});

test(`adjusted data works`, () => {
  expect.assertions(2);
  return alpha.data.adjusted(`msft`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Time Series (Daily)']).toBeDefined();
  });
});

test(`weekly data works`, () => {
  expect.assertions(2);
  return alpha.data.weekly(`msft`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Weekly Time Series']).toBeDefined();
  });
});

test(`monthly data works`, () => {
  expect.assertions(2);
  return alpha.data.monthly(`msft`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Monthly Time Series']).toBeDefined();
  });
});
