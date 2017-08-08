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
  url: (fn, symbol, size, type, interval) => {
    let params = [];

    if (fn !== undefined) {
      params.push(`function=${fn}`);
    }
    if (symbol !== undefined) {
      params.push(`symbol=${symbol}`);
    }
    if (size !== undefined) {
      params.push(`outputsize=${size}`);
    }
    if (type !== undefined) {
      params.push(`datatype=${type}`);
    }
    if (interval !== undefined) {
      params.push(`interval=${interval}`);
    }

    return `${config.base}${params.join('&')}`;
  }
});
