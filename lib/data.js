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
  const timeSeries = fn => (symbol, outputsize = `compact`, datatype = `json`, interval = 1) =>
    request
      .get(
        util.url([
          [util.PARAMETER_TYPES.function, fn],
          [util.PARAMETER_TYPES.symbol, symbol],
          [util.PARAMETER_TYPES.outputsize, outputsize],
          [util.PARAMETER_TYPES.datatype, datatype],
          [util.PARAMETER_TYPES.interval, interval.toString().concat('min')]
        ])
      )
      .then(JSON.parse);

  return {
    intraday: timeSeries(`TIME_SERIES_INTRADAY`),
    daily: timeSeries(`TIME_SERIES_DAILY`),
    adjusted: timeSeries(`TIME_SERIES_DAILY_ADJUSTED`),
    weekly: timeSeries(`TIME_SERIES_WEEKLY`),
    monthly: timeSeries(`TIME_SERIES_MONTHLY`)
  };
};
