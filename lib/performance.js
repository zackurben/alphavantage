'use strict';

import Util from './util';

export default config => {
  const util = Util(config);

  return {
    sector: util.fn('SECTOR')
  };
};
