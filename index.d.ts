// https://www.alphavantage.co/documentation/#latestprice
interface RawStockQuote {
  'Global Quote': {
    '01. symbol': string;
    '02. open': string;
    '03. high': string;
    '04. low': string;
    '05. price': string;
    '06. volume': string;
    '07. latest trading day': string;
    '08. previous close': string;
    '09. change': string;
    '10. change percent': string;
  };
}
// https://www.alphavantage.co/documentation/#dailyadj
interface RawStockDailyAdjusted {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
  };
  'Time Series (Daily)': {
    [date: string]:
      | {
          '1. open': string;
          '2. high': string;
          '3. low': string;
          '4. close': string;
          '5. adjusted close': string;
          '6. volume': string;
          '7. dividend amount': string;
          '8. split coefficient': string;
        }
      | undefined;
  };
}
// https://www.alphavantage.co/documentation/#symbolsearch
interface RawStockSearch {
  bestMatches: {
    '1. symbol': string;
    '2. name': string;
    '3. type': string;
    '4. region': string;
    '5. marketOpen': string;
    '6. marketClose': string;
    '7. timezone': string;
    '8. currency': string;
    '9. matchScore': string;
  }[];
}

declare function alpha(config?: {
  key: string;
}): {
  util: {
    url: (params: any) => string;
    polish: <T = any>(data: any) => T;
    fn: (type: string) => Function;
  };

  data: {
    intraday: <T = any>(symbol: string, outputsize?: string, datatype?: string, interval?: string) => Promise<T>;
    daily: <T = any>(symbol: string, outputsize?: string, datatype?: string, interval?: string) => Promise<T>;
    daily_adjusted: (
      symbol: string,
      outputsize?: string,
      datatype?: string,
      interval?: string
    ) => Promise<RawStockDailyAdjusted>;
    weekly: <T = any>(symbol: string, outputsize?: string, datatype?: string, interval?: string) => Promise<T>;
    weekly_adjusted: <T = any>(symbol: string, outputsize?: string, datatype?: string, interval?: string) => Promise<T>;
    monthly: <T = any>(symbol: string, outputsize?: string, datatype?: string, interval?: string) => Promise<T>;
    monthly_adjusted: <T = any>(
      symbol: string,
      outputsize?: string,
      datatype?: string,
      interval?: string
    ) => Promise<T>;
    quote: (symbol: string, outputsize?: string, datatype?: string, interval?: string) => Promise<RawStockQuote>;
    search: (keywords: string) => Promise<RawStockSearch>;
  };

  forex: {
    rate: <T = any>(from_currency: string, to_currency: string) => Promise<T>;
    intraday: <T = any>(from_currency: string, to_currency: string, interval: string, outputsize: string) => Promise<T>;
    daily: <T = any>(from_currency: string, to_currency: string) => Promise<T>;
    weekly: <T = any>(from_currency: string, to_currency: string) => Promise<T>;
    monthly: <T = any>(from_currency: string, to_currency: string) => Promise<T>;
  };

  crypto: {
    daily: <T = any>(symbol: string, market: string) => Promise<T>;
    weekly: <T = any>(symbol: string, market: string) => Promise<T>;
    monthly: <T = any>(symbol: string, market: string) => Promise<T>;
  };

  technical: {
    sma: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    ema: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    wma: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    dema: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    tema: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    trima: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    kama: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    mama: <T = any>(
      symbol: string,
      interval: string,
      series_type: string,
      fastlimit: number,
      slowlimit: number
    ) => Promise<T>;
    t3: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    macd: <T = any>(
      symbol: string,
      interval: string,
      series_type: string,
      fastperiod: number,
      slowperiod: number,
      signalperiod: number,
      fastmatype: any,
      slowmatype: any,
      signalmatype: any
    ) => Promise<T>;
    macdext: <T = any>(
      symbol: string,
      interval: string,
      series_type: string,
      fastperiod: number,
      slowperiod: number,
      signalperiod: number,
      fastmatype: any,
      slowmatype: any,
      signalmatype: any
    ) => Promise<T>;
    stoch: <T = any>(
      symbol: string,
      interval: string,
      fastkperiod: any,
      slowkperiod: any,
      slowdperiod: any,
      slowkmatype: any,
      slowdmatype: any
    ) => Promise<T>;
    stochf: <T = any>(
      symbol: string,
      interval: string,
      fastkperiod: any,
      fastdperiod: any,
      fastdmatype: any
    ) => Promise<T>;
    rsi: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    stochrsi: <T = any>(
      symbol: string,
      interval: string,
      time_period: any,
      series_type: any,
      fastkperiod: any,
      fastdperiod: any,
      fastdmatype: any
    ) => Promise<T>;
    willr: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    adx: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    adxr: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    apo: <T = any>(
      symbol: string,
      interval: string,
      series_type: string,
      fastperiod: any,
      slowperiod: any,
      matype: any
    ) => Promise<T>;
    ppo: <T = any>(
      symbol: string,
      interval: string,
      series_type: string,
      fastperiod: any,
      slowperiod: number,
      matype: any
    ) => Promise<T>;
    mom: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    bop: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    cci: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    cmo: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    roc: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    rocr: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    aroon: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    aroonosc: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    mfi: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    trix: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    ultosc: <T = any>(
      symbol: string,
      interval: string,
      timeperiod1: string,
      timeperiod2: any,
      timeperiod3: any
    ) => Promise<T>;
    dx: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    minus_di: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    plus_di: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    minus_dm: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    plus_dm: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    bbands: <T = any>(
      symbol: string,
      interval: string,
      time_period: any,
      series_type: string,
      nbdevup: any,
      nbdevdn: any,
      matype: any
    ) => Promise<T>;
    midpoint: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    midprice: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    sar: <T = any>(symbol: string, interval: string, acceleration: string, maximum: any) => Promise<T>;
    trange: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    atr: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    natr: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    ad: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    adosc: <T = any>(symbol: string, interval: string, fastperiod: any, slowperiod: any) => Promise<T>;
    obv: <T = any>(symbol: string, interval: string, time_period: any, series_type: string) => Promise<T>;
    ht_trendline: <T = any>(symbol: string, interval: string, series_type: string) => Promise<T>;
    ht_sine: <T = any>(symbol: string, interval: string, series_type: string) => Promise<T>;
    ht_trendmode: <T = any>(symbol: string, interval: string, series_type: string) => Promise<T>;
    ht_dcperiod: <T = any>(symbol: string, interval: string, series_type: string) => Promise<T>;
    ht_dcphase: <T = any>(symbol: string, interval: string, series_type: string) => Promise<T>;
    ht_dcphasor: <T = any>(symbol: string, interval: string, series_type: string) => Promise<T>;
  };

  performance: {
    sector: <T = any>(params: any) => T;
  };

  fundamental: {
    company_overview: <T = any>(symbol: string) => Promise<T>;
    income_statement: <T = any>(symbol: string) => Promise<T>;
    balance_sheet: <T = any>(symbol: string) => Promise<T>;
    cash_flow: <T = any>(symbol: string) => Promise<T>;
  };
};

declare namespace alpha {
  // Polished

  // https://www.alphavantage.co/documentation/#latestprice
  export interface StockQuote {
    data: {
      symbol: string;
      open: string;
      high: string;
      low: string;
      price: string;
      volume: string;
      latest_trading_day: string;
      prev_close: string;
      change: string;
      change_percent: string;
    };
  }

  // https://www.alphavantage.co/documentation/#dailyadj
  export interface StockDailyAdjusted {
    meta: {
      information: string;
      symbol: string;
      updated: string;
      size: string;
      zone: string;
    };
    data: {
      [date: string]:
        | {
            open: string;
            high: string;
            low: string;
            close: string;
            adjusted: string;
            volume: string;
            dividend: string;
            split: string;
          }
        | undefined;
    };
  }

  // https://www.alphavantage.co/documentation/#symbolsearch
  export interface StockSearch {
    bestMatches: {
      [index: string]:
        | {
            symbol: string;
            name: string;
            type: string;
            region: string;
            market_open: string;
            market_close: string;
            zone: string;
            currency: string;
            match_score: string;
          }
        | undefined;
    };
  }
}

export = alpha;
