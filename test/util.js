'use strict';

const alpha = require('../')();

test(`intraday data polishing works`, () => {
  expect.assertions(41);
  return alpha.data.intraday(`msft`).then(data => {
    const polished = alpha.util.polish(data);
    let first;

    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1. Information']).toBeDefined();
    expect(data['Meta Data']['2. Symbol']).toBeDefined();
    expect(data['Meta Data']['3. Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4. Interval']).toBeDefined();
    expect(data['Meta Data']['5. Output Size']).toBeDefined();
    expect(data['Meta Data']['6. Time Zone']).toBeDefined();
    expect(data['Time Series (1min)']).toBeDefined();
    first = Object.keys(data['Time Series (1min)'])[0];
    expect(first).toBeDefined();
    expect(data['Time Series (1min)'][first]['1. open']).toBeDefined();
    expect(data['Time Series (1min)'][first]['2. high']).toBeDefined();
    expect(data['Time Series (1min)'][first]['3. low']).toBeDefined();
    expect(data['Time Series (1min)'][first]['4. close']).toBeDefined();
    expect(data['Time Series (1min)'][first]['5. volume']).toBeDefined();

    expect(polished['Meta Data']).toBeUndefined();
    expect(polished['Time Series (1min)']).toBeUndefined();
    expect(polished['meta']).toBeDefined();
    expect(polished['meta']['1. Information']).toBeUndefined();
    expect(polished['meta']['2. Symbol']).toBeUndefined();
    expect(polished['meta']['3. Last Refreshed']).toBeUndefined();
    expect(polished['meta']['4. Interval']).toBeUndefined();
    expect(polished['meta']['5. Output Size']).toBeUndefined();
    expect(polished['meta']['6. Time Zone']).toBeUndefined();
    expect(polished['meta']['information']).toBeDefined();
    expect(polished['meta']['symbol']).toBeDefined();
    expect(polished['meta']['updated']).toBeDefined();
    expect(polished['meta']['interval']).toBeDefined();
    expect(polished['meta']['size']).toBeDefined();
    expect(polished['meta']['timezone']).toBeDefined();
    expect(polished['data']).toBeDefined();
    first = Object.keys(polished['data'])[0];
    expect(first).toBeDefined();
    expect(polished['data'][first]['1. open']).toBeUndefined();
    expect(polished['data'][first]['2. high']).toBeUndefined();
    expect(polished['data'][first]['3. low']).toBeUndefined();
    expect(polished['data'][first]['4. close']).toBeUndefined();
    expect(polished['data'][first]['5. volume']).toBeUndefined();
    expect(polished['data'][first]['open']).toBeDefined();
    expect(polished['data'][first]['high']).toBeDefined();
    expect(polished['data'][first]['low']).toBeDefined();
    expect(polished['data'][first]['close']).toBeDefined();
    expect(polished['data'][first]['volume']).toBeDefined();
  });
});
