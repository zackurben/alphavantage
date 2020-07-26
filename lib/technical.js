'use strict';

import Util from './util';

export default (config) => {
  const util = Util(config);

  /**
   * A generic function generator for sma-like technicals.
   *
   * @param {String} fn
   *   The sma-like function to use
   */
  const SMA_LIKE = (fn) => (symbol, interval, time_period, series_type) =>
    util.fn(fn)({ symbol, interval, time_period, series_type });

  /**
   * A generic function generator for macdext-like technicals.
   *
   * @param {String} fn
   *   The macdext-like function to use
   */
  const MACDEXT_LIKE = (fn) => (
    symbol,
    interval,
    series_type,
    fastperiod = 12,
    slowperiod = 26,
    signalperiod = 9,
    fastmatype,
    slowmatype,
    signalmatype
  ) =>
    util.fn(fn)({
      symbol,
      interval,
      series_type,
      fastperiod,
      slowperiod,
      signalperiod,
      fastmatype,
      slowmatype,
      signalmatype
    });

  /**
   * A generic function generator for apo-like technicals.
   *
   * @param {String} fn
   *   The apo-like function to use
   */
  const APO_LIKE = (fn) => (symbol, interval, series_type, fastperiod, slowperiod, matype) =>
    util.fn(fn)({ symbol, interval, series_type, fastperiod, slowperiod, matype });

  /**
   * A generic function generator for ht-like technicals.
   *
   * @param {String} fn
   *   The ht-like function to use
   */
  const HT_LIKE = (fn) => (symbol, interval, series_type) => util.fn(fn)({ symbol, interval, series_type });

  return {
    sma: SMA_LIKE('SMA'),
    ema: SMA_LIKE('EMA'),
    wma: SMA_LIKE('WMA'),
    dema: SMA_LIKE('DEMA'),
    tema: SMA_LIKE('TEMA'),
    trima: SMA_LIKE('TRIMA'),
    kama: SMA_LIKE('KAMA'),
    mama: (symbol, interval, series_type, fastlimit = 0.01, slowlimit = 0.01) =>
      util.fn('MAMA')({ symbol, interval, series_type, fastlimit, slowlimit }),
    t3: SMA_LIKE('T3'),
    macd: MACDEXT_LIKE('MACD'),
    macdext: MACDEXT_LIKE('MACDEXT'),
    stoch: (symbol, interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype) =>
      util.fn('STOCH')({ symbol, interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype }),
    stochf: (symbol, interval, fastkperiod, fastdperiod, fastdmatype) =>
      util.fn('STOCHF')({ symbol, interval, fastkperiod, fastdperiod, fastdmatype }),
    rsi: SMA_LIKE('RSI'),
    stochrsi: (symbol, interval, time_period, series_type, fastkperiod, fastdperiod, fastdmatype) =>
      util.fn('STOCHRSI')({ symbol, interval, time_period, series_type, fastkperiod, fastdperiod, fastdmatype }),
    willr: SMA_LIKE('WILLR'),
    adx: SMA_LIKE('ADX'),
    adx: SMA_LIKE('ADX'),
    adxr: SMA_LIKE('ADXR'),
    apo: APO_LIKE('APO'),
    ppo: APO_LIKE('PPO'),
    mom: SMA_LIKE('MOM'),
    bop: SMA_LIKE('BOP'),
    cci: SMA_LIKE('CCI'),
    cmo: SMA_LIKE('CMO'),
    roc: SMA_LIKE('ROC'),
    rocr: SMA_LIKE('ROCR'),
    aroon: SMA_LIKE('AROON'),
    aroonosc: SMA_LIKE('AROONOSC'),
    mfi: SMA_LIKE('MFI'),
    trix: SMA_LIKE('TRIX'),
    ultosc: (symbol, interval, timeperiod1, timeperiod2, timeperiod3) =>
      util.fn('ULTOSC')({ symbol, interval, timeperiod1, timeperiod2, timeperiod3 }),
    dx: SMA_LIKE('DX'),
    minus_di: SMA_LIKE('MINUS_DI'),
    plus_di: SMA_LIKE('PLUS_DI'),
    minus_dm: SMA_LIKE('MINUS_DM'),
    plus_dm: SMA_LIKE('PLUS_DM'),
    bbands: (symbol, interval, time_period, series_type, nbdevup, nbdevdn, matype) =>
      util.fn('BBANDS')({ symbol, interval, time_period, series_type, nbdevup, nbdevdn, matype }),
    midpoint: SMA_LIKE('MIDPOINT'),
    midprice: SMA_LIKE('MIDPRICE'),
    sar: (symbol, interval, acceleration, maximum) => util.fn('SAR')({ symbol, interval, acceleration, maximum }),
    trange: SMA_LIKE('TRANGE'),
    atr: SMA_LIKE('ATR'),
    natr: SMA_LIKE('NATR'),
    ad: SMA_LIKE('AD'),
    adosc: (symbol, interval, fastperiod, slowperiod) => util.fn('ADOSC')({ symbol, interval, fastperiod, slowperiod }),
    obv: SMA_LIKE('OBV'),
    ht_trendline: HT_LIKE('HT_TRENDLINE'),
    ht_sine: HT_LIKE('HT_SINE'),
    ht_trendmode: HT_LIKE('HT_TRENDMODE'),
    ht_dcperiod: HT_LIKE('HT_DCPERIOD'),
    ht_dcphase: HT_LIKE('HT_DCPHASE'),
    ht_dcphasor: HT_LIKE('HT_PHASOR')
  };
};
