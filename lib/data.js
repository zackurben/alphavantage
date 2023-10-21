'use strict';

import Util from './util';

export default (config) => {
  const util = Util(config);

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
  const series =
    (fn) =>
    (symbol, outputsize = 'compact', datatype = 'json', interval = '1min', slice = 'year1month1') => {
      let params = {
        symbol,
        outputsize,
        datatype
      };

      if (['TIME_SERIES_INTRADAY'].includes(fn)) {
        params.interval = interval;
      }
      return util.fn(fn)(params);
    };

  /**
   * Util function to get the symbol search data.
   *
   * @TODO: Add input validation.
   *
   * @param {String} fn
   *   The enum fn available for search data.
   *
   * @returns {Function}
   *   A search function to accept user data that returns a promise.
   */
  const search = (fn) => (keywords) =>
    util.fn(fn)({
      keywords
    });

  return {
    intraday: series('TIME_SERIES_INTRADAY'),
    daily: series('TIME_SERIES_DAILY'),
    daily_adjusted: series('TIME_SERIES_DAILY_ADJUSTED'),
    weekly: series('TIME_SERIES_WEEKLY'),
    weekly_adjusted: series('TIME_SERIES_WEEKLY_ADJUSTED'),
    monthly: series('TIME_SERIES_MONTHLY'),
    monthly_adjusted: series('TIME_SERIES_MONTHLY_ADJUSTED'),
    quote: series('GLOBAL_QUOTE'),
    search: search('SYMBOL_SEARCH')
  };
};
