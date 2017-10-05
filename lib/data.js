'use strict';

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
  const series = fn => (symbol, outputsize = 'compact', datatype = 'json', interval = '1min') =>
    util.fn(fn)({
      symbol,
      interval,
      outputsize,
      datatype
    });

  return {
    intraday: series('TIME_SERIES_INTRADAY'),
    daily: series('TIME_SERIES_DAILY'),
    adjusted: series('TIME_SERIES_DAILY_ADJUSTED'),
    weekly: series('TIME_SERIES_WEEKLY'),
    monthly: series('TIME_SERIES_MONTHLY')
  };
};
