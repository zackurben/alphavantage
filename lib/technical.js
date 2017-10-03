'use strict';

const request = require('request-promise-native');

module.exports = config => {
  const util = require('./util')(config);

  /**
   * Util function to get the sector performance data.
   * 
   * @returns {Promise}
   *   The request promise.
   */
  const sma = (symbol, interval, time_period, series_type) =>
    request
      .get(
        util.url([
          [util.PARAMETER_TYPES.function, 'SMA'],
          [util.PARAMETER_TYPES.symbol, symbol],
          [util.PARAMETER_TYPES.interval, interval],
          [util.PARAMETER_TYPES.time_period, time_period],
          [util.PARAMETER_TYPES.series_type, series_type]
        ])
      )
      .then(JSON.parse);

  return {
    sma
  };
};

//sar
