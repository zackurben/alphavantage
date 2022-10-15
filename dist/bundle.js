(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('cross-fetch')) :
  typeof define === 'function' && define.amd ? define(['cross-fetch'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.alphavantage = factory(global.fetch));
})(this, (function (fetch) { 'use strict';

  /**
   * Time stamp regex that AlphaVantage uses.
   */
  const timestamp = /[0-9]{4}-[0-9]{2}-[0-9]{2}( [0-9]{2}:[0-9]{2}:[0-9]{2})?/g;

  /**
   * Price open regex for target markets in target currency.
   */
  const cryptoMarketOpen = /1a\. open \(.*\)/g;

  /**
   * Price high regex for target markets in target currency.
   */
  const cryptoMarketHigh = /2a\. high \(.*\)/g;

  /**
   * Price low regex for target markets in target currency.
   */
  const cryptoMarketLow = /3a\. low \(.*\)/g;

  /**
   * Price close regex for target markets in target currency.
   */
  const cryptoMarketClose = /4a\. close \(.*\)/g;

  /**
   * The data keys to replace from the AlphaVantage API.
   */
  const keys = {
    'Aroon Down': 'down',
    'Aroon Up': 'up',
    'Meta Data': 'meta',
    'Realtime Currency Exchange Rate': 'rate',
    'Rank A: Real-Time Performance': 'real',
    'Rank B: 1 Day Performance': '1day',
    'Rank C: 5 Day Performance': '5day',
    'Rank D: 1 Month Performance': '1month',
    'Rank E: 3 Month Performance': '3month',
    'Rank F: Year-to-Date (YTD) Performance': 'ytd',
    'Rank G: 1 Year Performance': '1year',
    'Rank H: 3 Year Performance': '3year',
    'Rank I: 5 Year Performance': '5year',
    'Rank J: 10 Year Performance': '10year',
    Information: 'information',
    'Last Refreshed': 'updated',
    'Time Series (1min)': 'data',
    'Time Series (Daily)': 'data',
    'Time Series (Digital Currency Intraday)': 'data',
    'Time Series (Digital Currency Daily)': 'data',
    'Time Series (Digital Currency Weekly)': 'data',
    'Time Series (Digital Currency Monthly)': 'data',
    'Time Series FX (Daily)': 'data',
    'Time Series FX (1min)': 'data',
    'Time Series FX (5min)': 'data',
    'Time Series FX (15min)': 'data',
    'Time Series FX (30min)': 'data',
    'Time Series FX (60min)': 'data',
    'Time Series FX (Weekly)': 'data',
    'Time Series FX (Monthly)': 'data',
    'Weekly Time Series': 'data',
    'Weekly Adjusted Time Series': 'data',
    'Monthly Adjusted Time Series': 'data',
    'Monthly Time Series': 'data',
    'Stock Quotes': 'data',
    'Global Quote': 'data',
    'Technical Analysis: SMA': 'data',
    'Technical Analysis: EMA': 'data',
    'Technical Analysis: WMA': 'data',
    'Technical Analysis: DEMA': 'data',
    'Technical Analysis: TEMA': 'data',
    'Technical Analysis: TRIMA': 'data',
    'Technical Analysis: KAMA': 'data',
    'Technical Analysis: MAMA': 'data',
    'Technical Analysis: T3': 'data',
    'Technical Analysis: MACD': 'data',
    'Technical Analysis: MACDEXT': 'data',
    'Technical Analysis: STOCH': 'data',
    'Technical Analysis: STOCHF': 'data',
    'Technical Analysis: RSI': 'data',
    'Technical Analysis: STOCHRSI': 'data',
    'Technical Analysis: WILLR': 'data',
    'Technical Analysis: ADX': 'data',
    'Technical Analysis: ADXR': 'data',
    'Technical Analysis: APO': 'data',
    'Technical Analysis: PPO': 'data',
    'Technical Analysis: MOM': 'data',
    'Technical Analysis: BOP': 'data',
    'Technical Analysis: CCI': 'data',
    'Technical Analysis: CMO': 'data',
    'Technical Analysis: ROC': 'data',
    'Technical Analysis: ROCR': 'data',
    'Technical Analysis: AROON': 'data',
    'Technical Analysis: AROONOSC': 'data',
    'Technical Analysis: MFI': 'data',
    'Technical Analysis: TRIX': 'data',
    'Technical Analysis: ULTOSC': 'data',
    'Technical Analysis: DX': 'data',
    'Technical Analysis: MINUS_DI': 'data',
    'Technical Analysis: PLUS_DI': 'data',
    'Technical Analysis: MINUS_DM': 'data',
    'Technical Analysis: PLUS_DM': 'data',
    'Technical Analysis: BBANDS': 'data',
    'Technical Analysis: MIDPOINT': 'data',
    'Technical Analysis: MIDPRICE': 'data',
    'Technical Analysis: SAR': 'data',
    'Technical Analysis: TRANGE': 'data',
    'Technical Analysis: ATR': 'data',
    'Technical Analysis: NATR': 'data',
    'Technical Analysis: Chaikin A/D': 'data',
    'Technical Analysis: ADOSC': 'data',
    'Technical Analysis: OBV': 'data',
    'Technical Analysis: HT_TRENDLINE': 'data',
    'Technical Analysis: HT_SINE': 'data',
    'Technical Analysis: HT_TRENDMODE': 'data',
    'Technical Analysis: HT_DCPERIOD': 'data',
    'Technical Analysis: HT_DCPHASE': 'data',
    'Technical Analysis: HT_PHASOR': 'data',
    '01. symbol': 'symbol',
    '02. open': 'open',
    '03. high': 'high',
    '04. low': 'low',
    '05. price': 'price',
    '06. volume': 'volume',
    '07. latest trading day': 'latest_trading_day',
    '08. previous close': 'prev_close',
    '09. change': 'change',
    '10. change percent': 'change_percent',
    '1. Information': 'information',
    '1. From_Currency Code': 'from_currency',
    '2. From Symbol': 'from_currency',
    '1: Symbol': 'symbol',
    '1. open': 'open',
    '1b. price (USD)': 'usd',
    '1b. open (USD)': 'usd_open',
    '2. price': 'price',
    '2. high': 'high',
    '2. From_Currency Name': 'from_currency_name',
    '2. Symbol': 'symbol',
    '2. volume': 'volume',
    '2: Indicator': 'indicator',
    '2. Digital Currency Code': 'coin',
    '2b. high (USD)': 'usd_high',
    '3. low': 'low',
    '3. To_Currency Code': 'to_currency',
    '3. To Symbol': 'to_currency',
    '3. Last Refreshed': 'updated',
    '4. Last Refreshed': 'updated',
    '3. Digital Currency Name': 'coin_name',
    '3. market cap (USD)': 'cap',
    '3. volume': 'volume',
    '3b. low (USD)': 'usd_low',
    '4. Output Size': 'size',
    '4. To_Currency Name': 'to_currency_name',
    '4. close': 'close',
    '4. Interval': 'interval',
    '5. Interval': 'interval',
    '4. Market Code': 'market',
    '4. Time Zone': 'zone',
    '4. timestamp': 'updated',
    '4b. close (USD)': 'usd_close',
    '5. adjusted close': 'adjusted',
    '5. Exchange Rate': 'value',
    '5. Market Name': 'market_name',
    '5: Time Period': 'period',
    '5. Output Size': 'size',
    '6. Output Size': 'size',
    '5. Time Zone': 'zone',
    '5. volume': 'volume',
    '5: Series Type': 'series',
    '5.1: Fast Limit': 'fastlimit',
    '5.1: Fast Period': 'fastperiod',
    '5.1: FastK Period': 'fastkperiod',
    '5.1: Acceleration': 'acceleration',
    '5.1: Time Period 1': 'timeperiod1',
    '5.2: Slow Limit': 'slowlimit',
    '5.2: Slow Period': 'slowperiod',
    '5.2: SlowK Period': 'slowkperiod',
    '5.2: FastD Period': 'fastdperiod',
    '5.2: SlowK Period': 'slowkperiod',
    '5.2: Maximum': 'maximum',
    '5.2: Time Period 2': 'timeperiod2',
    '5.3: Signal Period': 'signalperiod',
    '5.3: SlowK MA Type': 'slowkmatype',
    '5.3: FastD MA Type': 'fastdmatype',
    '5.3: MA Type': 'matype',
    '5.3: Time Period 3': 'timeperiod3',
    '5.4: Fast MA Type': 'fastmatype',
    '5.4: SlowD Period': 'slowdperiod',
    '5.5: Slow MA Type': 'slowmatype',
    '5.5: SlowD MA Type': 'slowdmatype',
    '5.6: Signal MA Type': 'signalmatype',
    '6. volume': 'volume',
    '6. Time Zone': 'zone',
    '6. market cap (USD)': 'cap',
    '5. Last Refreshed': 'updated',
    '6. Last Refreshed': 'updated',
    '6: Volume Factor (vFactor)': 'volume',
    '6: Series Type': 'series',
    '6. Interval': 'interval',
    '6.1: FastK Period': 'fastkperiod',
    '6.1: Deviation multiplier for upper band': 'nbdevup',
    '6.2: FastD Period': 'fastdperiod',
    '6.2: Deviation multiplier for lower band': 'nbdevdn',
    '6.3: FastD MA Type': 'fastdmatype',
    '6.3: MA Type': 'matype',
    '7: Series Type': 'series',
    '7. Time Zone': 'zone',
    '7. Last Refreshed': 'updated',
    '7. dividend amount': 'dividend',
    '8. Time Zone': 'zone',
    '8. split coefficient': 'split',
    '1. symbol': 'symbol',
    '2. name': 'name',
    '3. type': 'type',
    '4. region': 'region',
    '5. marketOpen': 'market_open',
    '6. marketClose': 'market_close',
    '7. timezone': 'zone',
    '8. currency': 'currency',
    '9. matchScore': 'match_score'
  };

  var Util = (config) => {
    /**
     * Recursively walk the data tree and replace weird keys with a normalized set.
     *
     * @param {Object|String|Number} data
     *   The data to normalize.
     *
     * @returns {Object|String|Number}
     *   Normalized data.
     */
    const polish = (data) => {
      // If this is not an object, dont recurse.
      if (!data || typeof data !== 'object') {
        return data;
      }

      // If the data is a complex object, walk all subtrees to normalize all branches.
      let clean = {};
      Object.keys(data).forEach((key) => {
        key = key.toString();

        // If the key is a date time string, convert it to an iso timestamp.
        if (timestamp.test(key)) {
          clean[new Date(key).toISOString()] = polish(data[key]);
          return;
        }

        // Rekey the crypto market open currency.
        if (cryptoMarketOpen.test(key)) {
          clean['market_open'] = polish(data[key]);
          return;
        }

        // Rekey the crypto market high currency.
        if (cryptoMarketHigh.test(key)) {
          clean['market_high'] = polish(data[key]);
          return;
        }

        // Rekey the crypto market low currency.
        if (cryptoMarketLow.test(key)) {
          clean['market_low'] = polish(data[key]);
          return;
        }

        // Rekey the crypto market close currency.
        if (cryptoMarketClose.test(key)) {
          clean['market_close'] = polish(data[key]);
          return;
        }

        clean[keys[key] || key] = polish(data[key]);
      });

      return clean;
    };

    /**
     * Util function to build the proper API url.
     *
     * @param {Object} params
     *   The parameter object as type:value pairs.
     *
     * @returns {String}
     *   The API url to use for a given function and input parameters.
     */
    const url = (params) => {
      params = Object.keys(params || {})
        .map((type) => {
          let value = params[type];
          if (value !== undefined) {
            return `${type}=${value}`;
          }

          return undefined;
        })
        .filter((value) => value !== undefined)
        .join('&');

      return `${config.base}${params}`;
    };

    /**
     * Strip \n and \r from values
     *
     * @param {String} value
     *   The value to clean
     */
    const stripEol = (value = '') => value.replace(/\r/g, '').replace(/\n/g, '').trim();

    /**
     * Convert raw csv input data into json.
     *
     * @param {String} raw
     *   The json data
     */
    const csvToJSON = (raw = '') => {
      const lines = raw.split('\n');
      const headers = lines.shift().split(',');
      return lines.map((row) => {
        const cols = row.split(',');
        let out = {};

        headers.forEach((header, index) => {
          out[stripEol(header)] = stripEol(cols[index]);
        });

        return out;
      });
    };

    /**
     * Wrapper function generator for any endpoint.
     *
     * @param {String} type
     *   The API function type to use
     *
     * @returns {Function}
     *   The callback function to use in the sdk.
     */
    const fn =
      (type) =>
      (
        params = {
          datatype: 'json'
        }
      ) =>
        fetch(url(Object.assign({}, params, { function: type })))
          .then((res) => {
            if (!res.status.toString().match(/2\d{2}/)) {
              throw `An AlphaVantage error occurred. ${res.status}: ${res.text()}`;
            }

            // Handle csv returns.
            if (params.datatype && params.datatype.toString().toLowerCase() !== 'json')
              return res.text().then((data) => csvToJSON(data));

            // Default to json return if the util doesnt specify otherwise
            return res.json();
          })
          .then((data) => {
            if (
              params.datatype &&
              params.datatype.toString().toLowerCase() === 'json' &&
              data['Meta Data'] === undefined &&
              data['Realtime Currency Exchange Rate'] === undefined &&
              data['Global Quote'] === undefined &&
              data['bestMatches'] === undefined &&
              data['Symbol'] === undefined &&
              data['symbol'] === undefined &&
              data['name'] === undefined &&
              data['interval'] === undefined &&
              data['unit'] === undefined &&
              data['data'] === undefined
            ) {
              throw `An AlphaVantage error occurred. ${data['Information'] || JSON.stringify(data)}`;
            }

            return data;
          });

    return {
      url,
      polish,
      fn,
      stripEol,
      csvToJSON
    };
  };

  var Crypto = (config) => {
    const util = Util(config);

    /**
     * Util function to get the crypto data.
     *
     * @param {String} fn
     *   The enum fn available for crypto data.
     *
     * @returns {Function}
     *   A data function to accept user input and returns a promise.
     */
    const series = (fn) => (symbol, market) =>
      util.fn(fn)({
        symbol,
        market
      });

    return {
      daily: series('DIGITAL_CURRENCY_DAILY'),
      weekly: series('DIGITAL_CURRENCY_WEEKLY'),
      monthly: series('DIGITAL_CURRENCY_MONTHLY')
    };
  };

  var Data = (config) => {
    const util = Util(config);

    /**
     * Util function to get the timeseries data.
     *
     * @TODO: Add input validation.
     *
     * @param {String} fn
     *   The enum fn available for timeseries data.
     *
     * @returns {Function}
     *   A timeseries function to accept user data that returns a promise.
     */
    const series =
      (fn) =>
      (symbol, outputsize = 'compact', datatype = 'json', interval = '1min', slice = 'year1month1') => {
        let params = {
          symbol,
          outputsize,
          datatype
        };

        if (['TIME_SERIES_INTRADAY', 'TIME_SERIES_INTRADAY_EXTENDED'].includes(fn)) {
          params.interval = interval;
        }
        if (['TIME_SERIES_INTRADAY_EXTENDED'].includes(fn)) {
          params.datatype = 'csv';
          params.slice = slice;
        }
        return util.fn(fn)(params);
      };

    /**
     * Util function to get the symbol search data.
     *
     * @TODO: Add input validation.
     *
     * @param {String} fn
     *   The enum fn available for search data.
     *
     * @returns {Function}
     *   A search function to accept user data that returns a promise.
     */
    const search = (fn) => (keywords) =>
      util.fn(fn)({
        keywords
      });

    return {
      intraday: series('TIME_SERIES_INTRADAY'),
      intraday_extended: series('TIME_SERIES_INTRADAY_EXTENDED'),
      daily: series('TIME_SERIES_DAILY'),
      daily_adjusted: series('TIME_SERIES_DAILY_ADJUSTED'),
      weekly: series('TIME_SERIES_WEEKLY'),
      weekly_adjusted: series('TIME_SERIES_WEEKLY_ADJUSTED'),
      monthly: series('TIME_SERIES_MONTHLY'),
      monthly_adjusted: series('TIME_SERIES_MONTHLY_ADJUSTED'),
      quote: series('GLOBAL_QUOTE'),
      search: search('SYMBOL_SEARCH')
    };
  };

  var Forex = (config) => {
    const util = Util(config);

    return {
      rate: (from_currency, to_currency) => util.fn('CURRENCY_EXCHANGE_RATE')({ from_currency, to_currency }),
      intraday: (from_symbol, to_symbol, interval, outputsize = 'compact') =>
        util.fn('FX_INTRADAY')({ from_symbol, to_symbol, interval, outputsize }),
      daily: (from_symbol, to_symbol) => util.fn('FX_DAILY')({ from_symbol, to_symbol }),
      weekly: (from_symbol, to_symbol) => util.fn('FX_WEEKLY')({ from_symbol, to_symbol }),
      monthly: (from_symbol, to_symbol) => util.fn('FX_MONTHLY')({ from_symbol, to_symbol })
    };
  };

  var Performance = (config) => {
    const util = Util(config);

    return {
      sector: util.fn('SECTOR')
    };
  };

  var Technical = (config) => {
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

  var Fundamental = (config) => {
    const util = Util(config);

    const fundamental = (fn) => (symbol) => util.fn(fn)({ symbol });

    return {
      company_overview: fundamental('OVERVIEW'),
      income_statement: fundamental('INCOME_STATEMENT'),
      balance_sheet: fundamental('BALANCE_SHEET'),
      cash_flow: fundamental('CASH_FLOW')
    };
  };

  var Experimental = (config) => {
    const util = Util(config);
    return (fn, params = {}) => util.fn(fn)(params);
  };

  /**
   * The Alpha Vantage core module.
   */
  var index = (config = {}) => {
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
      performance: Performance(config),
      fundamental: Fundamental(config),
      experimental: Experimental(config)
    };
  };

  return index;

}));
