'use strict';

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
  '2. Symbol': 'symbol',
  '3. Last Refreshed': 'updated',
  '4. Interval': 'interval',
  '4. Output Size': 'size',
  '5. Output Size': 'size',
  '5. Time Zone': 'timezone',
  '6. Time Zone': 'timezone',
  'Time Series (1min)': 'data',
  'Time Series (Daily)': 'data',
  '1. open': 'open',
  '2. high': 'high',
  '3. low': 'low',
  '4. close': 'close',
  '5. volume': 'volume'
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
      // If the data is a timestamp, convert it from a weird string.
      if (timestamp.test(data.toString())) {
        return new Date(data).getTime().toString();
      }

      return data;
    }

    // If the data is a complex object, walk all subtrees to normalize all branches.
    let clean = {};
    Object.keys(data).forEach(key => {
      clean[keys[key] || key] = polish(data[key]);
    });

    return clean;
  };

  /**
   * Util function to build the proper API url.
   * 
   * @param {String} fn
   *   The API function to use
   * @param {String} symbol
   *   The stock symbol to use
   * @param {String} size
   *   The data size to get
   * @param {String} type
   *   The data type to fetch
   * @param {String} interval
   *   The time interval to use
   * 
   * @returns {String}
   *   The API url to use for a given function and input parameters.
   */
  const url = (fn, symbol, size, type, interval) => {
    let params = [];

    if (fn !== undefined) {
      params.push(`function=${fn}`);
    }
    if (symbol !== undefined) {
      params.push(`symbol=${symbol}`);
    }
    if (size !== undefined) {
      params.push(`outputsize=${size}`);
    }
    if (type !== undefined) {
      params.push(`datatype=${type}`);
    }
    if (interval !== undefined) {
      params.push(`interval=${interval}`);
    }

    return `${config.base}${params.join('&')}`;
  };

  return {
    url,
    polish
  };
};
