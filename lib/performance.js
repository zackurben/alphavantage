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
  const sector = () => request.get(util.url('SECTOR')).then(JSON.parse);

  return {
    sector
  };
};
