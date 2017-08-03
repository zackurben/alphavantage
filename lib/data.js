'use strict';

const request = require('request-promise-native');

module.exports = config => {
  const util = require('./util')(config);

  /**
   * Util function to get the timeseries data.
   * 
   * @TODO: Add input validation.
   * 
   * @param {String} fn
   *   The enum fn available for timeseries data.
   * 
   * @returns {Function}
   *   A timeseries function to accept user data that returns a promise. 
   */
  const timeSeries = fn => (symbol, size = `compact`, type = `json`, interval = 1) =>
    request.get(util.url(fn, symbol, size, type, interval.toString().concat('min'))).then(data => JSON.parse(data));

  return {
    intraday: timeSeries(`TIME_SERIES_INTRADAY`),
    daily: timeSeries(`TIME_SERIES_DAILY`),
    adjusted: timeSeries(`TIME_SERIES_DAILY_ADJUSTED`),
    weekly: timeSeries(`TIME_SERIES_WEEKLY`),
    monthly: timeSeries(`TIME_SERIES_MONTHLY`)
  };
};
