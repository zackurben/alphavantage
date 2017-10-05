'use strict';

module.exports = config => {
  const util = require('./util')(config);

  return {
    sector: util.fn('SECTOR')
  };
};
