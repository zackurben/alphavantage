'use strict';

module.exports = config => {
  const util = require('./util')(config);

  return {
    sma: (symbol, interval, time_period, series_type) => util.fn('SMA')({ symbol, interval, time_period, series_type })
  };
};
