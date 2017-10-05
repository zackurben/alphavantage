'use strict';

module.exports = config => {
  const util = require('./util')(config);

  /**
   * Util function to get the sector performance data.
   * 
   * @returns {Function}
   *   The request function.
   */
  const technical = fn => (symbol, interval, time_period, series_type) =>
    util.fn({
      function: fn,
      symbol,
      interval,
      time_period,
      series_type
    });

  return {
    sma: technical('SMA')
  };
};
