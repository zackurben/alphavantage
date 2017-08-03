'use strict';

module.exports = config => ({
  /**
   * Util function to build the proper API url.
   * 
   * @param {String} fn
   *   The API function to use
   * @param {String} symbol
   *   The stock symbol to use
   * @param {String} size
   *   The data size to get
   * @param {String} type
   *   The data type to fetch
   * @param {String} interval
   *   The time interval to use
   * 
   * @returns {String}
   *   The API url to use for a given function and input parameters.
   */
  url: (fn, symbol, size, type, interval = undefined) =>
    `${config.base}${[
      `function=${fn}`,
      `symbol=${symbol}`,
      `outputsize=${size}`,
      `datatype=${type}`,
      `interval=${interval}`
    ].filter(value => value !== undefined).join('&')}`
});
