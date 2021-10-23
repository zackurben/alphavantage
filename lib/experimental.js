import Util from './util';

export default (config) => {
  const util = Util(config);
  return (fn, params = {}) => util.fn(fn)(params);
};
