'use strict';

module.exports = config => {
  const util = require('./util')(config);

  /**
   * A generic function generator for sma-like technicals.
   * 
   * @param {String} fn
   *   The sma-like function to use 
   */
  const SMA_LIKE = fn => (symbol, interval, time_period, series_type) =>
    util.fn(fn)({ symbol, interval, time_period, series_type });

  return {
    sma: SMA_LIKE('SMA'),
    ema: SMA_LIKE('EMA'),
    wma: SMA_LIKE('WMA'),
    dema: SMA_LIKE('DEMA'),
    tema: SMA_LIKE('TEMA'),
    trima: SMA_LIKE('TRIMA'),
    kama: SMA_LIKE('KAMA'),
    t3: SMA_LIKE('T3'),
    rsi: SMA_LIKE('RSI'),
    mom: SMA_LIKE('MOM'),
    cmo: SMA_LIKE('CMO'),
    roc: SMA_LIKE('ROC'),
    rocr: SMA_LIKE('ROCR'),
    trix: SMA_LIKE('TRIX'),
    midpoint: SMA_LIKE('MIDPOINT')
  };
};
