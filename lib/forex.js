'use strict';

import Util from './util';

export default (config) => {
  const util = Util(config);

  return {
    rate: (from_currency, to_currency) => util.fn('CURRENCY_EXCHANGE_RATE')({ from_currency, to_currency }),
    intraday: (from_symbol, to_symbol, interval, outputsize = 'compact') =>
      util.fn('FX_INTRADAY')({ from_symbol, to_symbol, interval, outputsize }),
    daily: (from_symbol, to_symbol) => util.fn('FX_DAILY')({ from_symbol, to_symbol }),
    weekly: (from_symbol, to_symbol) => util.fn('FX_WEEKLY')({ from_symbol, to_symbol }),
    monthly: (from_symbol, to_symbol) => util.fn('FX_MONTHLY')({ from_symbol, to_symbol })
  };
};
