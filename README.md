# AlphaVantage

[![Build Status](https://travis-ci.org/zackurben/alphavantage.svg?branch=master)](https://travis-ci.org/zackurben/alphavantage)
[![Coverage Status](https://coveralls.io/repos/github/zackurben/alphavantage/badge.svg?branch=master)](https://coveralls.io/github/zackurben/alphavantage?branch=master)

This is a simple wrapper around the [Alpha Vantage API](https://www.alphavantage.co/documentation/) hosted on [NPM](https://www.npmjs.com/package/alphavantage). I have no affiliation with AlphaVantage. This library can be used in the browser or in node since it is packaged as a UMD module.

All contributions are welcome, see our [CONTRIBUTING.md](CONTRIBUTING.md)! This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for additional information.

`All available functions with this SDK have the same parameters as listed in the the Alpha Vantage Docs, without the "function" or "apikey". Do not include the "function" or "apikey" parameters when using this library. All functions return promises with the response data.`

> If you want to use a function that isn't supported yet, checkout the `alpha.experimental()` function!

## Installation

```bash
npm i alphavantage
```

## Node.js Initialization

```javascript
/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require('alphavantage')({ key: 'qweqweqwe' });
```

## Browser Initialization

> Note: Your API key will be visible in the network traffic, this should not be used for public projects.

```html
<body>
  <script src="path/to/alphavantage/dist/bundle.js"></script>
  <script type="application/javascript">
    /**
     * Init Alpha Vantage with your API key.
     *
     * @param {String} key
     *   Your Alpha Vantage API key.
     */
    const alpha = alphavantage({ key: 'qweqweqwe' });
  </script>
</body>
```

## Usage

```javascript
// Simple examples
alpha.data.intraday(`msft`).then((data) => {
  console.log(data);
});

alpha.forex.rate('btc', 'usd').then((data) => {
  console.log(data);
});

alpha.crypto.daily('btc', 'usd').then((data) => {
  console.log(data);
});

alpha.technical.sma(`msft`, `daily`, 60, `close`).then((data) => {
  console.log(data);
});

alpha.experimental('CRYPTO_INTRADAY', { symbol: 'ETH', market: 'USD', interval: '5min' })).then((data) => {
  console.log(data);
});
```

## Util

Data polishing

- Rewrite weird data keys to be consistent across all api calls. This is an optional utility you can use with the result of any api call.

```javascript
const polished = alpha.util.polish(data);
```

## Data

See [Alpha Vantage](https://www.alphavantage.co/documentation/#time-series-data) for the parameters.

```javascript
alpha.data.intraday(symbol, outputsize, datatype, interval);
alpha.data.daily(symbol, outputsize, datatype, interval);
alpha.data.daily_adjusted(symbol, outputsize, datatype, interval);
alpha.data.weekly(symbol, outputsize, datatype, interval);
alpha.data.weekly_adjusted(symbol, outputsize, datatype, interval);
alpha.data.monthly(symbol, outputsize, datatype, interval);
alpha.data.monthly_adjusted(symbol, outputsize, datatype, interval);
alpha.data.quote(symbol, outputsize, datatype, interval);
alpha.data.search(keywords);
```

## Forex

See [Alpha Vantage](https://www.alphavantage.co/documentation/#fx) for the parameters.

```javascript
alpha.forex.rate(from_currency, to_currency);
```

## Crypto

See [Alpha Vantage](https://www.alphavantage.co/documentation/#digital-currency) for the parameters.

```javascript
alpha.crypto.daily(symbol, market);
alpha.crypto.weekly(symbol, market);
alpha.crypto.monthly(symbol, market);
```

## Technicals

See [Alpha Vantage](https://www.alphavantage.co/documentation/#technical-indicators) for the parameters.

```javascript
alpha.technical.sma(symbol, interval, time_period, series_type);
alpha.technical.ema(symbol, interval, time_period, series_type);
alpha.technical.wma(symbol, interval, time_period, series_type);
alpha.technical.dema(symbol, interval, time_period, series_type);
alpha.technical.tema(symbol, interval, time_period, series_type);
alpha.technical.trima(symbol, interval, time_period, series_type);
alpha.technical.kama(symbol, interval, time_period, series_type);
alpha.technical.mama(symbol, interval, series_type, fastlimit, slowlimit);
alpha.technical.t3(symbol, interval, time_period, series_type);
alpha.technical.macd(symbol, interval, series_type, fastperiod, slowperiod, signalperiod);
alpha.technical.macdext(
  symbol,
  interval,
  series_type,
  fastperiod,
  slowperiod,
  signalperiod,
  fastmatype,
  slowmatype,
  signalmatype
);
alpha.technical.stoch(symbol, interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype);
alpha.technical.stochf(symbol, interval, fastkperiod, fastdperiod, fastdmatype);
alpha.technical.rsi(symbol, interval, time_period, series_type);
alpha.technical.stochrsi(symbol, interval, time_period, series_type, fastkperiod, slowdperiod, fastdmatype);
alpha.technical.willr(symbol, interval, time_period);
alpha.technical.adx(symbol, interval, time_period);
alpha.technical.adxr(symbol, interval, time_period);
alpha.technical.apo(symbol, interval, series_type, fastperiod, slowperiod, matype);
alpha.technical.ppo(symbol, interval, series_type, fastperiod, slowperiod, matype);
alpha.technical.mom(symbol, interval, time_period, series_type);
alpha.technical.bop(symbol, interval);
alpha.technical.cci(symbol, interval, time_period);
alpha.technical.cmo(symbol, interval, time_period, series_type);
alpha.technical.roc(symbol, interval, time_period, series_type);
alpha.technical.rocr(symbol, interval, time_period, series_type);
alpha.technical.aroon(symbol, interval, time_period);
alpha.technical.aroonosc(symbol, interval, time_period);
alpha.technical.mfi(symbol, interval, time_period);
alpha.technical.trix(symbol, interval, time_period, series_type);
alpha.technical.ultosc(symbol, interval, timeperiod1, timeperiod2, timeperiod3);
alpha.technical.dx(symbol, interval, time_period);
alpha.technical.minus_di(symbol, interval, time_period);
alpha.technical.plus_di(symbol, interval, time_period);
alpha.technical.minus_dm(symbol, interval, time_period);
alpha.technical.plus_dm(symbol, interval, time_period);
alpha.technical.bbands(symbol, interval, time_period, series_type, nbdevup, nbdevdn);
alpha.technical.midpoint(symbol, interval, time_period, series_type);
alpha.technical.midprice(symbol, interval, time_period);
alpha.technical.sar(symbol, interval, acceleration, maximum);
alpha.technical.trange(symbol, interval);
alpha.technical.atr(symbol, interval, time_period);
alpha.technical.natr(symbol, interval, time_period);
alpha.technical.ad(symbol, interval);
alpha.technical.adosc(symbol, interval, fastperiod, slowperiod);
alpha.technical.obv(symbol, interval);
alpha.technical.ht_trendline(symbol, interval, series_type);
alpha.technical.ht_sine(symbol, interval, series_type);
alpha.technical.ht_trendmode(symbol, interval, series_type);
alpha.technical.ht_dcperiod(symbol, interval, series_type);
alpha.technical.ht_dcphase(symbol, interval, series_type);
alpha.technical.ht_dcphasor(symbol, interval, series_type);
```

## Experimental

This function allows you to use any AlphaVantage API that has not yet been implemented, use at your own risk! You can get the function name and params from the [API Documentation](https://www.alphavantage.co/documentation/) and it should be noted that the data polishing may be broken as you encounter new props that aren't supported yet. If you notice these props, please make a new Issue/Pull Request so we can enhance the library!

```javascript
alpha.experimental(fn, params);
alpha.experimental('TIME_SERIES_DAILY', { symbol: 'XYZ', ...});
```

## Contact

- Author: Zack Urben
- Twitter: https://twitter.com/zackurben (better)
- Contact: zackurben@gmail.com
