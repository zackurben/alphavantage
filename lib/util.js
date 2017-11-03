'use strict';

const request = require('request-promise-native');

/**
 * Time stamp regex that AlphaVantage uses.
 */
const timestamp = /[0-9]{4}-[0-9]{2}-[0-9]{2}( [0-9]{2}:[0-9]{2}:[0-9]{2})?/g;

/**
 * The data keys to replace from the AlphaVantage API.
 */
const keys = {
  'Meta Data': 'meta',
  '1. Information': 'information',
  Information: 'information',
  '1: Symbol': 'symbol',
  '2. Symbol': 'symbol',
  '2: Indicator': 'indicator',
  '3. Last Refreshed': 'updated',
  'Last Refreshed': 'updated',
  '4. Interval': 'interval',
  '5.1: Fast Limit': 'fastlimit',
  '5.1: Fast Period': 'fastperiod',
  '5.2: Slow Limit': 'slowlimit',
  '5.2: Slow Period': 'slowperiod',
  '5.3: Signal Period': 'signalperiod',
  '5.4: Fast MA Type': 'fastmatype',
  '5.5: Slow MA Type': 'slowmatype',
  '5.6: Signal MA Type': 'signalmatype',
  '5: Time Period': 'period',
  '6: Volume Factor (vFactor)': 'volume',
  '6: Series Type': 'series',
  '7: Series Type': 'series',
  '4. Output Size': 'size',
  '5. Output Size': 'size',
  '4. Time Zone': 'zone',
  '5. Time Zone': 'zone',
  '6. Time Zone': 'zone',
  '7. Time Zone': 'zone',
  '8. Time Zone': 'zone',
  'Time Series (1min)': 'data',
  'Time Series (Daily)': 'data',
  'Weekly Time Series': 'data',
  'Monthly Time Series': 'data',
  'Technical Analysis: SMA': 'data',
  'Technical Analysis: EMA': 'data',
  'Technical Analysis: WMA': 'data',
  'Technical Analysis: DEMA': 'data',
  'Technical Analysis: TEMA': 'data',
  'Technical Analysis: TRIMA': 'data',
  'Technical Analysis: KAMA': 'data',
  'Technical Analysis: MAMA': 'data',
  'Technical Analysis: T3': 'data',
  'Technical Analysis: RSI': 'data',
  'Technical Analysis: MOM': 'data',
  'Technical Analysis: CMO': 'data',
  'Technical Analysis: ROC': 'data',
  'Technical Analysis: ROCR': 'data',
  'Technical Analysis: TRIX': 'data',
  'Technical Analysis: MIDPOINT': 'data',
  '1. open': 'open',
  '2. high': 'high',
  '3. low': 'low',
  '4. close': 'close',
  '5. volume': 'volume',
  '6. volume': 'volume',
  '5. adjusted close': 'adjusted',
  '7. dividend amount': 'dividend',
  '8. split coefficient': 'split',
  'Rank A: Real-Time Performance': 'real',
  'Rank B: 1 Day Performance': '1day',
  'Rank C: 5 Day Performance': '5day',
  'Rank D: 1 Month Performance': '1month',
  'Rank E: 3 Month Performance': '3month',
  'Rank F: Year-to-Date (YTD) Performance': 'ytd',
  'Rank G: 1 Year Performance': '1year',
  'Rank H: 3 Year Performance': '3year',
  'Rank I: 5 Year Performance': '5year',
  'Rank J: 10 Year Performance': '10year'
};

module.exports = config => {
  /**
   * Recursively walk the data tree and replace weird keys with a normalized set.
   * 
   * @param {Object|String|Number} data
   *   The data to normalize.
   * 
   * @returns {Object|String|Number}
   *   Normalized data.
   */
  const polish = data => {
    // If this is not an object, dont recurse.
    if (typeof data !== 'object') {
      return data;
    }

    // If the data is a complex object, walk all subtrees to normalize all branches.
    let clean = {};
    Object.keys(data).forEach(key => {
      // If the key is a date time string, convert it to an iso timestamp.
      if (timestamp.test(key.toString())) {
        clean[new Date(key.toString()).toISOString()] = polish(data[key]);
        return;
      }

      clean[keys[key] || key] = polish(data[key]);
    });

    return clean;
  };

  /**
   * Util function to build the proper API url.
   * 
   * @param {Object} params
   *   The parameter object as type:value pairs.
   * 
   * @returns {String}
   *   The API url to use for a given function and input parameters.
   */
  const url = params => {
    params = Object.keys(params || {})
      .map(type => {
        let value = params[type];
        if (value !== undefined) {
          return `${type}=${value}`;
        }

        return undefined;
      })
      .filter(value => value !== undefined)
      .join('&');

    return `${config.base}${params}`;
  };

  /**
   * Wrapper function generator for any endpoint.
   * 
   * @param {String} type
   *   The API function type to use
   * 
   * @returns {Function}
   *   The callback function to use in the sdk.
   */
  const fn = type => params => request.get(url(Object.assign({}, params, { function: type }))).then(JSON.parse).catch(console.error);

  return {
    url,
    polish,
    fn
  };
};
