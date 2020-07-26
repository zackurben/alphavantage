'use strict';

export default (url) =>
  Promise.resolve({
    body: `{}`,
    status: parseInt(url.slice(-3)),
    text: () => `{}`,
    json: () => ({})
  });
