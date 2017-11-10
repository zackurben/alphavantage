'use strict';

module.exports = config => {
  const util = require('./util')(config);

  return {
    rate: (from_currency, to_currency) => util.fn('CURRENCY_EXCHANGE_RATE')({ from_currency, to_currency })
  };
};
