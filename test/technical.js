'use strict';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
const alpha = require('../')();

test(`sma data works`, () => {
  expect.assertions(9);
  return alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Simple Moving Average (SMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: SMA']).toBeDefined();
  });
});

test(`ema data works`, () => {
  expect.assertions(9);
  return alpha.technical.ema(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Exponential Moving Average (EMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: EMA']).toBeDefined();
  });
});

test(`wma data works`, () => {
  expect.assertions(9);
  return alpha.technical.wma(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Weighted Moving Average (WMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: WMA']).toBeDefined();
  });
});

test(`dema data works`, () => {
  expect.assertions(9);
  return alpha.technical.dema(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Double Exponential Moving Average (DEMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: DEMA']).toBeDefined();
  });
});

test(`tema data works`, () => {
  expect.assertions(9);
  return alpha.technical.tema(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Triple Exponential Moving Average (TEMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: TEMA']).toBeDefined();
  });
});

test(`trima data works`, () => {
  expect.assertions(9);
  return alpha.technical.trima(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Triangular Exponential Moving Average (TRIMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: TRIMA']).toBeDefined();
  });
});

test(`kama data works`, () => {
  expect.assertions(9);
  return alpha.technical.kama(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Kaufman Adaptive Moving Average (KAMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: KAMA']).toBeDefined();
  });
});

test(`mama data works`, () => {
  expect.assertions(10);
  return alpha.technical.mama(`msft`, `daily`, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('MESA Adaptive Moving Average (MAMA)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5.1: Fast Limit']).toEqual(0.01);
    expect(data['Meta Data']['5.2: Slow Limit']).toEqual(0.01);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: MAMA']).toBeDefined();
  });
});

test(`t3 data works`, () => {
  expect.assertions(10);
  return alpha.technical.t3(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Triple Exponential Moving Average (T3)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Volume Factor (vFactor)']).toBeDefined();
    expect(data['Meta Data']['7: Series Type']).toEqual('close');
    expect(data['Meta Data']['8: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: T3']).toBeDefined();
  });
});

test(`macd data works`, () => {
  expect.assertions(11);
  return alpha.technical.macd(`msft`, `daily`, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Moving Average Convergence/Divergence (MACD)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5.1: Fast Period']).toEqual(12);
    expect(data['Meta Data']['5.2: Slow Period']).toEqual(26);
    expect(data['Meta Data']['5.3: Signal Period']).toEqual(9);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: MACD']).toBeDefined();
  });
});

test(`macdext data works`, () => {
  expect.assertions(14);
  return alpha.technical.macdext(`msft`, `daily`, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('MACD with Controllable MA Type (MACDEXT)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5.1: Fast Period']).toEqual(12);
    expect(data['Meta Data']['5.2: Slow Period']).toEqual(26);
    expect(data['Meta Data']['5.3: Signal Period']).toEqual(9);
    expect(data['Meta Data']['5.4: Fast MA Type']).toEqual(0);
    expect(data['Meta Data']['5.5: Slow MA Type']).toEqual(0);
    expect(data['Meta Data']['5.6: Signal MA Type']).toEqual(0);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: MACDEXT']).toBeDefined();
  });
});

test(`rsi data works`, () => {
  expect.assertions(9);
  return alpha.technical.rsi(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Relative Strength Index (RSI)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: RSI']).toBeDefined();
  });
});

test(`mom data works`, () => {
  expect.assertions(9);
  return alpha.technical.mom(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Momentum (MOM)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: MOM']).toBeDefined();
  });
});

test(`cmo data works`, () => {
  expect.assertions(9);
  return alpha.technical.cmo(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Chande Momentum Oscillator (CMO)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: CMO']).toBeDefined();
  });
});

test(`roc data works`, () => {
  expect.assertions(9);
  return alpha.technical.roc(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Rate of change : ((price/prevPrice)-1)*100');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: ROC']).toBeDefined();
  });
});

test(`rocr data works`, () => {
  expect.assertions(9);
  return alpha.technical.rocr(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('Rate of change ratio: (price/prevPrice)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: ROCR']).toBeDefined();
  });
});

test(`trix data works`, () => {
  expect.assertions(9);
  return alpha.technical.trix(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('1-day Rate-Of-Change (ROC) of a Triple Smooth EMA (TRIX)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: TRIX']).toBeDefined();
  });
});

test(`midpoint data works`, () => {
  expect.assertions(9);
  return alpha.technical.midpoint(`msft`, `daily`, 60, `close`).then(data => {
    expect(data['Meta Data']).toBeDefined();
    expect(data['Meta Data']['1: Symbol']).toEqual('msft');
    expect(data['Meta Data']['2: Indicator']).toEqual('MidPoint over period (MIDPOINT)');
    expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
    expect(data['Meta Data']['4: Interval']).toEqual('daily');
    expect(data['Meta Data']['5: Time Period']).toEqual(60);
    expect(data['Meta Data']['6: Series Type']).toEqual('close');
    expect(data['Meta Data']['7: Time Zone']).toBeDefined();
    expect(data['Technical Analysis: MIDPOINT']).toBeDefined();
  });
});
