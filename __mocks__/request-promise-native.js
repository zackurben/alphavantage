'use strict';

module.exports = {
  get: (url, options) =>
    Promise.resolve({
      body: `{}`,
      statusCode: parseInt(url.slice(-3))
    })
};
