'use strict';

import 'cross-fetch/polyfill';
import Crypto from './lib/crypto';
import Data from './lib/data';
import Experimental from './lib/experimental';
import Forex from './lib/forex';
import Fundamental from './lib/fundamental';
import Technical from './lib/technical';
import Util from './lib/util';

/**
 * The Alpha Vantage core module.
 */
export default (config = {}) => {
  // Check for API Key
  if (config.key === undefined) {
    throw new Error('Missing Alpha Vantage config settings: key');
  }

  // Add the base url for submodules to use.
  config.base = `https://www.alphavantage.co/query?apikey=${config.key}&`;

  // Include all the submodules.
  return {
    util: Util(config),
    data: Data(config),
    forex: Forex(config),
    crypto: Crypto(config),
    technical: Technical(config),
    fundamental: Fundamental(config),
    experimental: Experimental(config)
  };
};
