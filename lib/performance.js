'use strict';

module.exports = config => {
  const util = require('./util')(config);

  /**
   * Util function to get the sector performance data.
   * 
   * @returns {Function}
   *   The request function.
   */
  const sector = () => util.fn({ function: 'SECTOR' });

  return {
    sector
  };
};
