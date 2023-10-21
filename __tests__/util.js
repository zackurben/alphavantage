'use strict';

jest.mock('cross-fetch');
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

test(`the url builder properly builds urls`, () => {
  expect.assertions(7);
  const frags = alpha.util
    .url({
      function: 'a',
      symbol: 'b',
      outputsize: 'c',
      datatype: 'd',
      interval: 'e'
    })
    .toString()
    .split('?')[1]
    .toString()
    .split('&');

  expect(frags.length).toBe(6);
  expect(/^apikey=.*$/.test(frags[0])).toBe(true);
  expect(frags[1]).toBe('function=a');
  expect(frags[2]).toBe('symbol=b');
  expect(frags[3]).toBe('outputsize=c');
  expect(frags[4]).toBe('datatype=d');
  expect(frags[5]).toBe('interval=e');
});

test(`the url builder with no params yields the base url`, () => {
  expect.assertions(3);
  const frags = alpha.util.url().toString().split('?')[1].toString().split('&');

  expect(frags.length).toBe(2);
  expect(/^apikey=.*$/.test(frags[0])).toBe(true);
  expect(frags[1]).toBe('');
});

test(`the url builder with undefined params yields the base url`, () => {
  expect.assertions(3);
  const frags = alpha.util.url({ 'this_does-not_exist': undefined }).toString().split('?')[1].toString().split('&');

  expect(frags.length).toBe(2);
  expect(/^apikey=.*$/.test(frags[0])).toBe(true);
  expect(frags[1]).toBe('');
});

test(`intraday data polishing works`, () => {
  expect.assertions(41);
  const data = require('./examples/data/intraday.json');
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
  expect(polished['meta']['zone']).toBeDefined();
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

test(`daily data polishing works`, () => {
  expect.assertions(38);
  const data = require('./examples/data/daily.json');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Symbol']).toBeDefined();
  expect(data['Meta Data']['3. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['4. Output Size']).toBeDefined();
  expect(data['Meta Data']['5. Time Zone']).toBeDefined();
  expect(data['Time Series (Daily)']).toBeDefined();
  first = Object.keys(data['Time Series (Daily)'])[0];
  expect(first).toBeDefined();
  expect(data['Time Series (Daily)'][first]['1. open']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['2. high']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['3. low']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['4. close']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['5. volume']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series (Daily)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Symbol']).toBeUndefined();
  expect(polished['meta']['3. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['4. Output Size']).toBeUndefined();
  expect(polished['meta']['5. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['symbol']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['size']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
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

test(`adjusted data polishing works`, () => {
  expect.assertions(47);
  const data = require('./examples/data/adjusted.json');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Symbol']).toBeDefined();
  expect(data['Meta Data']['3. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['4. Output Size']).toBeDefined();
  expect(data['Meta Data']['5. Time Zone']).toBeDefined();
  expect(data['Time Series (Daily)']).toBeDefined();
  first = Object.keys(data['Time Series (Daily)'])[0];
  expect(first).toBeDefined();
  expect(data['Time Series (Daily)'][first]['1. open']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['2. high']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['3. low']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['4. close']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['5. adjusted close']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['6. volume']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['7. dividend amount']).toBeDefined();
  expect(data['Time Series (Daily)'][first]['8. split coefficient']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series (Daily)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Symbol']).toBeUndefined();
  expect(polished['meta']['3. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['4. Output Size']).toBeUndefined();
  expect(polished['meta']['5. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['symbol']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['size']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
  expect(polished['data']).toBeDefined();
  first = Object.keys(polished['data'])[0];
  expect(first).toBeDefined();
  expect(polished['data'][first]['1. open']).toBeUndefined();
  expect(polished['data'][first]['2. high']).toBeUndefined();
  expect(polished['data'][first]['3. low']).toBeUndefined();
  expect(polished['data'][first]['4. close']).toBeUndefined();
  expect(polished['data'][first]['5. adjusted close']).toBeUndefined();
  expect(polished['data'][first]['6. volume']).toBeUndefined();
  expect(polished['data'][first]['7. dividend amount']).toBeUndefined();
  expect(polished['data'][first]['8. split coefficient']).toBeUndefined();
  expect(polished['data'][first]['open']).toBeDefined();
  expect(polished['data'][first]['high']).toBeDefined();
  expect(polished['data'][first]['low']).toBeDefined();
  expect(polished['data'][first]['close']).toBeDefined();
  expect(polished['data'][first]['adjusted']).toBeDefined();
  expect(polished['data'][first]['volume']).toBeDefined();
  expect(polished['data'][first]['dividend']).toBeDefined();
  expect(polished['data'][first]['split']).toBeDefined();
});

test(`weekly data polishing works`, () => {
  expect.assertions(35);
  const data = require('./examples/data/weekly.json');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Symbol']).toBeDefined();
  expect(data['Meta Data']['3. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['4. Time Zone']).toBeDefined();
  expect(data['Weekly Time Series']).toBeDefined();
  first = Object.keys(data['Weekly Time Series'])[0];
  expect(first).toBeDefined();
  expect(data['Weekly Time Series'][first]['1. open']).toBeDefined();
  expect(data['Weekly Time Series'][first]['2. high']).toBeDefined();
  expect(data['Weekly Time Series'][first]['3. low']).toBeDefined();
  expect(data['Weekly Time Series'][first]['4. close']).toBeDefined();
  expect(data['Weekly Time Series'][first]['5. volume']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Weekly Time Series']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Symbol']).toBeUndefined();
  expect(polished['meta']['3. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['4. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['symbol']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
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

test(`monthly data polishing works`, () => {
  expect.assertions(35);
  const data = require('./examples/data/monthly.json');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Symbol']).toBeDefined();
  expect(data['Meta Data']['3. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['4. Time Zone']).toBeDefined();
  expect(data['Monthly Time Series']).toBeDefined();
  first = Object.keys(data['Monthly Time Series'])[0];
  expect(first).toBeDefined();
  expect(data['Monthly Time Series'][first]['1. open']).toBeDefined();
  expect(data['Monthly Time Series'][first]['2. high']).toBeDefined();
  expect(data['Monthly Time Series'][first]['3. low']).toBeDefined();
  expect(data['Monthly Time Series'][first]['4. close']).toBeDefined();
  expect(data['Monthly Time Series'][first]['5. volume']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Monthly Time Series']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Symbol']).toBeUndefined();
  expect(polished['meta']['3. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['4. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['symbol']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
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

test(`forex rate data polishing works`, () => {
  expect.assertions(24);
  const data = require('./examples/forex/rate.json');
  const polished = alpha.util.polish(data);

  expect(data['Realtime Currency Exchange Rate']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['1. From_Currency Code']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['2. From_Currency Name']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['3. To_Currency Code']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['4. To_Currency Name']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['5. Exchange Rate']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['6. Last Refreshed']).toBeDefined();
  expect(data['Realtime Currency Exchange Rate']['7. Time Zone']).toBeDefined();

  expect(polished['Realtime Currency Exchange Rate']).toBeUndefined();
  expect(polished['rate']['1. From_Currency Code']).toBeUndefined();
  expect(polished['rate']['2. From_Currency Name']).toBeUndefined();
  expect(polished['rate']['3. To_Currency Code']).toBeUndefined();
  expect(polished['rate']['4. To_Currency Name']).toBeUndefined();
  expect(polished['rate']['5. Exchange Rate']).toBeUndefined();
  expect(polished['rate']['6. Last Refreshed']).toBeUndefined();
  expect(polished['rate']['7. Time Zone']).toBeUndefined();

  expect(polished['rate']).toBeDefined();
  expect(polished['rate']['from_currency']).toBeDefined();
  expect(polished['rate']['from_currency_name']).toBeDefined();
  expect(polished['rate']['to_currency']).toBeDefined();
  expect(polished['rate']['to_currency_name']).toBeDefined();
  expect(polished['rate']['value']).toBeDefined();
  expect(polished['rate']['updated']).toBeDefined();
  expect(polished['rate']['zone']).toBeDefined();
});

test(`forex intraday data polishing works`, () => {
  expect.assertions(31);
  const data = require('./examples/forex/intraday.json');
  const polished = alpha.util.polish(data);
  let first = Object.keys(polished['data'])[0];

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. From Symbol']).toBeDefined();
  expect(data['Meta Data']['3. To Symbol']).toBeDefined();
  expect(data['Meta Data']['4. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['5. Interval']).toBeDefined();
  expect(data['Meta Data']['6. Output Size']).toBeDefined();
  expect(data['Meta Data']['7. Time Zone']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series FX (5min)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. From Symbol']).toBeUndefined();
  expect(polished['meta']['3. To Symbol']).toBeUndefined();
  expect(polished['meta']['4. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['5. Interval']).toBeUndefined();
  expect(polished['meta']['6. Output Size']).toBeUndefined();
  expect(polished['meta']['7. Time Zone']).toBeUndefined();

  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['from_currency']).toBeDefined();
  expect(polished['meta']['to_currency']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['interval']).toBeDefined();
  expect(polished['meta']['size']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();

  expect(polished['data']).toBeDefined();
  expect(polished['data'][first]).toBeDefined();
  expect(polished['data'][first]['open']).toBeDefined();
  expect(polished['data'][first]['high']).toBeDefined();
  expect(polished['data'][first]['low']).toBeDefined();
  expect(polished['data'][first]['close']).toBeDefined();
});

test(`forex daily data polishing works`, () => {
  expect.assertions(28);
  const data = require('./examples/forex/daily.json');
  const polished = alpha.util.polish(data);
  let first = Object.keys(polished['data'])[0];

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. From Symbol']).toBeDefined();
  expect(data['Meta Data']['3. To Symbol']).toBeDefined();
  expect(data['Meta Data']['4. Output Size']).toBeDefined();
  expect(data['Meta Data']['5. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['6. Time Zone']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series FX (Daily)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. From Symbol']).toBeUndefined();
  expect(polished['meta']['3. To Symbol']).toBeUndefined();
  expect(polished['meta']['4. Output Size']).toBeUndefined();
  expect(polished['meta']['5. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['6. Time Zone']).toBeUndefined();

  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['from_currency']).toBeDefined();
  expect(polished['meta']['to_currency']).toBeDefined();
  expect(polished['meta']['size']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();

  expect(polished['data']).toBeDefined();
  expect(polished['data'][first]).toBeDefined();
  expect(polished['data'][first]['open']).toBeDefined();
  expect(polished['data'][first]['high']).toBeDefined();
  expect(polished['data'][first]['low']).toBeDefined();
  expect(polished['data'][first]['close']).toBeDefined();
});

test(`forex weekly data polishing works`, () => {
  expect.assertions(25);
  const data = require('./examples/forex/weekly.json');
  const polished = alpha.util.polish(data);
  let first = Object.keys(polished['data'])[0];

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. From Symbol']).toBeDefined();
  expect(data['Meta Data']['3. To Symbol']).toBeDefined();
  expect(data['Meta Data']['4. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['5. Time Zone']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series FX (Weekly)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. From Symbol']).toBeUndefined();
  expect(polished['meta']['3. To Symbol']).toBeUndefined();
  expect(polished['meta']['4. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['5. Time Zone']).toBeUndefined();

  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['from_currency']).toBeDefined();
  expect(polished['meta']['to_currency']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();

  expect(polished['data']).toBeDefined();
  expect(polished['data'][first]).toBeDefined();
  expect(polished['data'][first]['open']).toBeDefined();
  expect(polished['data'][first]['high']).toBeDefined();
  expect(polished['data'][first]['low']).toBeDefined();
  expect(polished['data'][first]['close']).toBeDefined();
});

test(`forex monthly data polishing works`, () => {
  expect.assertions(25);
  const data = require('./examples/forex/monthly.json');
  const polished = alpha.util.polish(data);
  let first = Object.keys(polished['data'])[0];

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. From Symbol']).toBeDefined();
  expect(data['Meta Data']['3. To Symbol']).toBeDefined();
  expect(data['Meta Data']['4. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['5. Time Zone']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series FX (Monthly)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. From Symbol']).toBeUndefined();
  expect(polished['meta']['3. To Symbol']).toBeUndefined();
  expect(polished['meta']['4. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['5. Time Zone']).toBeUndefined();

  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['from_currency']).toBeDefined();
  expect(polished['meta']['to_currency']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();

  expect(polished['data']).toBeDefined();
  expect(polished['data'][first]).toBeDefined();
  expect(polished['data'][first]['open']).toBeDefined();
  expect(polished['data'][first]['high']).toBeDefined();
  expect(polished['data'][first]['low']).toBeDefined();
  expect(polished['data'][first]['close']).toBeDefined();
});

test(`daily crypto polishing works`, () => {
  expect.assertions(59);
  const data = require('./examples/crypto/daily');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Digital Currency Code']).toBeDefined();
  expect(data['Meta Data']['3. Digital Currency Name']).toBeDefined();
  expect(data['Meta Data']['4. Market Code']).toBeDefined();
  expect(data['Meta Data']['5. Market Name']).toBeDefined();
  expect(data['Meta Data']['6. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['7. Time Zone']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)']).toBeDefined();
  first = Object.keys(data['Time Series (Digital Currency Daily)'])[0];

  expect(first).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['1a. open (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['1b. open (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['2a. high (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['2b. high (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['3a. low (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['3b. low (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['4a. close (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['4b. close (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['5. volume']).toBeDefined();
  expect(data['Time Series (Digital Currency Daily)'][first]['6. market cap (USD)']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series (Digital Currency Daily)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Digital Currency Code']).toBeUndefined();
  expect(polished['meta']['3. Digital Currency Name']).toBeUndefined();
  expect(polished['meta']['4. Market Code']).toBeUndefined();
  expect(polished['meta']['5. Market Name']).toBeUndefined();
  expect(polished['meta']['6. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['7. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['coin']).toBeDefined();
  expect(polished['meta']['coin_name']).toBeDefined();
  expect(polished['meta']['market']).toBeDefined();
  expect(polished['meta']['market_name']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
  expect(polished['data']).toBeDefined();
  first = Object.keys(polished['data'])[0];
  expect(first).toBeDefined();
  expect(polished['data'][first]['1a. open (CNY)']).toBeUndefined();
  expect(polished['data'][first]['1b. open (USD)']).toBeUndefined();
  expect(polished['data'][first]['2a. high (CNY)']).toBeUndefined();
  expect(polished['data'][first]['2b. high (USD)']).toBeUndefined();
  expect(polished['data'][first]['3a. low (CNY)']).toBeUndefined();
  expect(polished['data'][first]['3b. low (USD)']).toBeUndefined();
  expect(polished['data'][first]['4a. close (CNY)']).toBeUndefined();
  expect(polished['data'][first]['4b. close (USD)']).toBeUndefined();
  expect(polished['data'][first]['5. volume']).toBeUndefined();
  expect(polished['data'][first]['6. market cap (USD)']).toBeUndefined();
  expect(polished['data'][first]['market_open']).toBeDefined();
  expect(polished['data'][first]['market_high']).toBeDefined();
  expect(polished['data'][first]['market_low']).toBeDefined();
  expect(polished['data'][first]['market_close']).toBeDefined();
  expect(polished['data'][first]['usd_open']).toBeDefined();
  expect(polished['data'][first]['usd_high']).toBeDefined();
  expect(polished['data'][first]['usd_low']).toBeDefined();
  expect(polished['data'][first]['usd_close']).toBeDefined();
  expect(polished['data'][first]['volume']).toBeDefined();
  expect(polished['data'][first]['cap']).toBeDefined();
});

test(`weekly crypto polishing works`, () => {
  expect.assertions(59);
  const data = require('./examples/crypto/weekly');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Digital Currency Code']).toBeDefined();
  expect(data['Meta Data']['3. Digital Currency Name']).toBeDefined();
  expect(data['Meta Data']['4. Market Code']).toBeDefined();
  expect(data['Meta Data']['5. Market Name']).toBeDefined();
  expect(data['Meta Data']['6. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['7. Time Zone']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)']).toBeDefined();
  first = Object.keys(data['Time Series (Digital Currency Weekly)'])[0];

  expect(first).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['1a. open (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['1b. open (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['2a. high (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['2b. high (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['3a. low (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['3b. low (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['4a. close (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['4b. close (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['5. volume']).toBeDefined();
  expect(data['Time Series (Digital Currency Weekly)'][first]['6. market cap (USD)']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series (Digital Currency Weekly)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Digital Currency Code']).toBeUndefined();
  expect(polished['meta']['3. Digital Currency Name']).toBeUndefined();
  expect(polished['meta']['4. Market Code']).toBeUndefined();
  expect(polished['meta']['5. Market Name']).toBeUndefined();
  expect(polished['meta']['6. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['7. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['coin']).toBeDefined();
  expect(polished['meta']['coin_name']).toBeDefined();
  expect(polished['meta']['market']).toBeDefined();
  expect(polished['meta']['market_name']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
  expect(polished['data']).toBeDefined();
  first = Object.keys(polished['data'])[0];
  expect(first).toBeDefined();
  expect(polished['data'][first]['1a. open (CNY)']).toBeUndefined();
  expect(polished['data'][first]['1b. open (USD)']).toBeUndefined();
  expect(polished['data'][first]['2a. high (CNY)']).toBeUndefined();
  expect(polished['data'][first]['2b. high (USD)']).toBeUndefined();
  expect(polished['data'][first]['3a. low (CNY)']).toBeUndefined();
  expect(polished['data'][first]['3b. low (USD)']).toBeUndefined();
  expect(polished['data'][first]['4a. close (CNY)']).toBeUndefined();
  expect(polished['data'][first]['4b. close (USD)']).toBeUndefined();
  expect(polished['data'][first]['5. volume']).toBeUndefined();
  expect(polished['data'][first]['6. market cap (USD)']).toBeUndefined();
  expect(polished['data'][first]['market_open']).toBeDefined();
  expect(polished['data'][first]['market_high']).toBeDefined();
  expect(polished['data'][first]['market_low']).toBeDefined();
  expect(polished['data'][first]['market_close']).toBeDefined();
  expect(polished['data'][first]['usd_open']).toBeDefined();
  expect(polished['data'][first]['usd_high']).toBeDefined();
  expect(polished['data'][first]['usd_low']).toBeDefined();
  expect(polished['data'][first]['usd_close']).toBeDefined();
  expect(polished['data'][first]['volume']).toBeDefined();
  expect(polished['data'][first]['cap']).toBeDefined();
});

test(`monthly crypto polishing works`, () => {
  expect.assertions(59);
  const data = require('./examples/crypto/monthly');
  const polished = alpha.util.polish(data);
  let first;

  expect(data['Meta Data']).toBeDefined();
  expect(data['Meta Data']['1. Information']).toBeDefined();
  expect(data['Meta Data']['2. Digital Currency Code']).toBeDefined();
  expect(data['Meta Data']['3. Digital Currency Name']).toBeDefined();
  expect(data['Meta Data']['4. Market Code']).toBeDefined();
  expect(data['Meta Data']['5. Market Name']).toBeDefined();
  expect(data['Meta Data']['6. Last Refreshed']).toBeDefined();
  expect(data['Meta Data']['7. Time Zone']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)']).toBeDefined();
  first = Object.keys(data['Time Series (Digital Currency Monthly)'])[0];

  expect(first).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['1a. open (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['1b. open (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['2a. high (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['2b. high (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['3a. low (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['3b. low (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['4a. close (CNY)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['4b. close (USD)']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['5. volume']).toBeDefined();
  expect(data['Time Series (Digital Currency Monthly)'][first]['6. market cap (USD)']).toBeDefined();

  expect(polished['Meta Data']).toBeUndefined();
  expect(polished['Time Series (Digital Currency Monthly)']).toBeUndefined();
  expect(polished['meta']).toBeDefined();
  expect(polished['meta']['1. Information']).toBeUndefined();
  expect(polished['meta']['2. Digital Currency Code']).toBeUndefined();
  expect(polished['meta']['3. Digital Currency Name']).toBeUndefined();
  expect(polished['meta']['4. Market Code']).toBeUndefined();
  expect(polished['meta']['5. Market Name']).toBeUndefined();
  expect(polished['meta']['6. Last Refreshed']).toBeUndefined();
  expect(polished['meta']['7. Time Zone']).toBeUndefined();
  expect(polished['meta']['information']).toBeDefined();
  expect(polished['meta']['coin']).toBeDefined();
  expect(polished['meta']['coin_name']).toBeDefined();
  expect(polished['meta']['market']).toBeDefined();
  expect(polished['meta']['market_name']).toBeDefined();
  expect(polished['meta']['updated']).toBeDefined();
  expect(polished['meta']['zone']).toBeDefined();
  expect(polished['data']).toBeDefined();
  first = Object.keys(polished['data'])[0];
  expect(first).toBeDefined();
  expect(polished['data'][first]['1a. open (CNY)']).toBeUndefined();
  expect(polished['data'][first]['1b. open (USD)']).toBeUndefined();
  expect(polished['data'][first]['2a. high (CNY)']).toBeUndefined();
  expect(polished['data'][first]['2b. high (USD)']).toBeUndefined();
  expect(polished['data'][first]['3a. low (CNY)']).toBeUndefined();
  expect(polished['data'][first]['3b. low (USD)']).toBeUndefined();
  expect(polished['data'][first]['4a. close (CNY)']).toBeUndefined();
  expect(polished['data'][first]['4b. close (USD)']).toBeUndefined();
  expect(polished['data'][first]['5. volume']).toBeUndefined();
  expect(polished['data'][first]['6. market cap (USD)']).toBeUndefined();
  expect(polished['data'][first]['market_open']).toBeDefined();
  expect(polished['data'][first]['market_high']).toBeDefined();
  expect(polished['data'][first]['market_low']).toBeDefined();
  expect(polished['data'][first]['market_close']).toBeDefined();
  expect(polished['data'][first]['usd_open']).toBeDefined();
  expect(polished['data'][first]['usd_high']).toBeDefined();
  expect(polished['data'][first]['usd_low']).toBeDefined();
  expect(polished['data'][first]['usd_close']).toBeDefined();
  expect(polished['data'][first]['volume']).toBeDefined();
  expect(polished['data'][first]['cap']).toBeDefined();
});

test(`symbol search polishing works`, () => {
  expect.assertions(21);
  const data = require('./examples/data/search.json');
  const polished = alpha.util.polish(data);
  let first;

  expect(polished['bestMatches']).toBeDefined();
  first = Object.keys(polished['bestMatches'])[0];
  expect(first).toBeDefined();
  expect(polished['bestMatches'][first]).toBeDefined();

  expect(polished['bestMatches'][first]['1. symbol']).toBeUndefined();
  expect(polished['bestMatches'][first]['2. name']).toBeUndefined();
  expect(polished['bestMatches'][first]['3. type']).toBeUndefined();
  expect(polished['bestMatches'][first]['4. region']).toBeUndefined();
  expect(polished['bestMatches'][first]['5. marketOpen']).toBeUndefined();
  expect(polished['bestMatches'][first]['6. marketClose']).toBeUndefined();
  expect(polished['bestMatches'][first]['7. timezone']).toBeUndefined();
  expect(polished['bestMatches'][first]['8. currency']).toBeUndefined();
  expect(polished['bestMatches'][first]['9. matchScore']).toBeUndefined();

  expect(polished['bestMatches'][first]['symbol']).toBeDefined();
  expect(polished['bestMatches'][first]['name']).toBeDefined();
  expect(polished['bestMatches'][first]['type']).toBeDefined();
  expect(polished['bestMatches'][first]['region']).toBeDefined();
  expect(polished['bestMatches'][first]['market_open']).toBeDefined();
  expect(polished['bestMatches'][first]['market_close']).toBeDefined();
  expect(polished['bestMatches'][first]['zone']).toBeDefined();
  expect(polished['bestMatches'][first]['currency']).toBeDefined();
  expect(polished['bestMatches'][first]['match_score']).toBeDefined();
});

test(`non unknown function calls are thrown to a catch`, () => {
  expect.assertions(1);

  return alpha.util
    .fn('123')()
    .catch((error) => {
      expect(error).toEqual(
        'An AlphaVantage error occurred. {"Error Message":"This API function (123) does not exist."}'
      );
    });
});

describe('stripEol', () => {
  test('empty input', () => {
    expect(alpha.util.stripEol('')).toEqual('');
  });

  test('newline first', () => {
    expect(alpha.util.stripEol('\ntest')).toEqual('test');
  });

  test('newline last', () => {
    expect(alpha.util.stripEol('test\n')).toEqual('test');
  });

  test('multiple newline', () => {
    expect(alpha.util.stripEol('\ntest\n')).toEqual('test');
  });

  test('return first', () => {
    expect(alpha.util.stripEol('\rtest')).toEqual('test');
  });

  test('return last', () => {
    expect(alpha.util.stripEol('test\r')).toEqual('test');
  });

  test('multiple returns', () => {
    expect(alpha.util.stripEol('\rtest\r')).toEqual('test');
  });

  test('mixed newline and returns', () => {
    expect(alpha.util.stripEol('test\r\n')).toEqual('test');
  });

  test('invalid win newline', () => {
    expect(alpha.util.stripEol('test\n\r')).toEqual('test');
  });

  test('mixed win newline', () => {
    expect(alpha.util.stripEol('\r\ntest\n\r')).toEqual('test');
  });

  test('strips spaces at both ends', () => {
    expect(alpha.util.stripEol('\r\n test \n\r')).toEqual('test');
  });

  test('dosnt strip spaces in the middle of keys', () => {
    expect(alpha.util.stripEol('\r\n test value \n\r')).toEqual('test value');
  });
});

describe('csvToJSON', () => {
  test('uses the first row for headers', () => {
    const text = `a,b,c,d
1,2,3,4
9,8,7,6`;
    const output = alpha.util.csvToJSON(text);

    expect(output).toBeInstanceOf(Array);
    expect(output.length).toEqual(2);
    expect(Object.keys(output[0])).toEqual(['a', 'b', 'c', 'd']);
    expect(output[0]).toEqual({ a: `1`, b: `2`, c: `3`, d: `4` });
    expect(output[1]).toEqual({ a: `9`, b: `8`, c: `7`, d: `6` });
  });
});
