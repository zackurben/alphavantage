'use strict';

import Util from './util';

export default (config) => {
  const util = Util(config);

  /**
   * Util function to get the crypto data.
   *
   * @param {String} fn
   *   The enum fn available for crypto data.
   *
   * @returns {Function}
   *   A data function to accept user input and returns a promise.
   */
  const series = (fn) => (symbol, market) =>
    util.fn(fn)({
      symbol,
      market
    });

  return {
    rate: (from_currency, to_currency) => util.fn('CURRENCY_EXCHANGE_RATE')({ from_currency, to_currency }),
    intraday: (symbol, market, interval, outputsize = 'compact') => util.fn('CRYPTO_INTRADAY')({ symbol, market, interval, outputsize }),
    daily: series('DIGITAL_CURRENCY_DAILY'),
    weekly: series('DIGITAL_CURRENCY_WEEKLY'),
    monthly: series('DIGITAL_CURRENCY_MONTHLY')
  };
};
