'use strict';

import Util from './util';

export default config => {
  const util = Util(config);

  return {
    rate: (from_currency, to_currency) => util.fn('CURRENCY_EXCHANGE_RATE')({ from_currency, to_currency })
  };
};
