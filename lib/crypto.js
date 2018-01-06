'use strict';

module.exports = config => {
  const util = require('./util')(config);

  /**
   * Util function to get the crypto data.
   * 
   * @param {String} fn
   *   The enum fn available for crypto data.
   * 
   * @returns {Function}
   *   A data function to accept user input and returns a promise. 
   */
  const series = fn => (symbol, market) =>
    util.fn(fn)({
      symbol,
      market
    });

  return {
    intraday: series('DIGITAL_CURRENCY_INTRADAY')
  };
};
