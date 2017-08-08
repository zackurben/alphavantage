'use strict';

/**
 * The Alpha Vantage core module.
 */
module.exports = config => {
  // Check for any config errors.
  if (!config) {
    throw new Error(`Missing config for alphavantage module`);
  }

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
    data: require('./lib/data')(config),
    performance: require('./lib/performance')(config)
  };
};
