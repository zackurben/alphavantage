'use strict';

import Util from './lib/util';
import Data from './lib/data';
import Forex from './lib/forex';
import Crypto from './lib/crypto';
import Technical from './lib/technical';
import Performance from './lib/performance';

// Attempt to load the env
try {
  require('dotenv').config();
} catch (e) {}

/**
 * The Alpha Vantage core module.
 */
export default (config = {}) => {
  let key;
  try {
    key = process.env.AV_KEY;
  } catch (e) {}

  config = Object.assign({}, { key }, config);

  // Check for config errors.
  let errors = [];
  ['key'].forEach(prop => {
    if (config[prop] === undefined) {
      errors.push(prop);
    }
  });
  if (errors.length) {
    throw new Error(`Missing Alpha Vantage config settings: ${errors.join(', ')}`);
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
    performance: Performance(config)
  };
};
