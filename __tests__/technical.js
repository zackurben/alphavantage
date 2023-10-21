'use strict';

import { setTimeout } from 'node:timers/promises';
import Alpha from '../';
const alpha = Alpha({ key: process.env.AV_KEY });

jest.setTimeout(30000);
jest.unmock('cross-fetch');
const TIME = 1000;

test(`sma data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.sma(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.ema(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.wma(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.dema(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.tema(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.trima(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.kama(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.mama(`msft`, `daily`, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.t3(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.macd(`msft`, `daily`, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.macdext(`msft`, `daily`, `close`))
    .then((data) => {
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

test(`stoch data works`, () => {
  expect.assertions(12);
  return setTimeout(TIME)
    .then(() => alpha.technical.stoch(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Stochastic (STOCH)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: FastK Period']).toEqual(5);
      expect(data['Meta Data']['5.2: SlowK Period']).toEqual(3);
      expect(data['Meta Data']['5.3: SlowK MA Type']).toEqual(0);
      expect(data['Meta Data']['5.4: SlowD Period']).toEqual(3);
      expect(data['Meta Data']['5.5: SlowD MA Type']).toEqual(0);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: STOCH']).toBeDefined();
    });
});

test(`stochf data works`, () => {
  expect.assertions(10);
  return setTimeout(TIME)
    .then(() => alpha.technical.stochf(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Stochastic Fast (STOCHF)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: FastK Period']).toEqual(5);
      expect(data['Meta Data']['5.2: FastD Period']).toEqual(3);
      expect(data['Meta Data']['5.3: FastD MA Type']).toEqual(0);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: STOCHF']).toBeDefined();
    });
});

test(`rsi data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.rsi(`msft`, `daily`, 60, `close`))
    .then((data) => {
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

test(`stochrsi data works`, () => {
  expect.assertions(12);
  return setTimeout(TIME)
    .then(() => alpha.technical.stochrsi(`msft`, `daily`, 60, `close`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Stochastic Relative Strength Index (STOCHRSI)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6.1: FastK Period']).toEqual(5);
      expect(data['Meta Data']['6.2: FastD Period']).toEqual(3);
      expect(data['Meta Data']['6.3: FastD MA Type']).toEqual(0);
      expect(data['Meta Data']['7: Series Type']).toEqual('close');
      expect(data['Meta Data']['8: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: STOCHRSI']).toBeDefined();
    });
});

test(`willr data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.willr(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual("Williams' %R (WILLR)");
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: WILLR']).toBeDefined();
    });
});

test(`adx data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.adx(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Average Directional Movement Index (ADX)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: ADX']).toBeDefined();
    });
});

test(`adxr data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.adxr(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Average Directional Movement Index Rating (ADXR)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: ADXR']).toBeDefined();
    });
});

test(`apo data works`, () => {
  expect.assertions(11);
  return setTimeout(TIME)
    .then(() => alpha.technical.apo(`msft`, `daily`, `close`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Absolute Price Oscillator (APO)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: Fast Period']).toEqual(12);
      expect(data['Meta Data']['5.2: Slow Period']).toEqual(26);
      expect(data['Meta Data']['5.3: MA Type']).toEqual(0);
      expect(data['Meta Data']['6: Series Type']).toEqual('close');
      expect(data['Meta Data']['7: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: APO']).toBeDefined();
    });
});

test(`ppo data works`, () => {
  expect.assertions(11);
  return setTimeout(TIME)
    .then(() => alpha.technical.ppo(`msft`, `daily`, `close`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Percentage Price Oscillator (PPO)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: Fast Period']).toEqual(12);
      expect(data['Meta Data']['5.2: Slow Period']).toEqual(26);
      expect(data['Meta Data']['5.3: MA Type']).toEqual(0);
      expect(data['Meta Data']['6: Series Type']).toEqual('close');
      expect(data['Meta Data']['7: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: PPO']).toBeDefined();
    });
});

test(`mom data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.mom(`msft`, `daily`, 60, `close`))
    .then((data) => {
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

test(`bop data works`, () => {
  expect.assertions(7);
  return setTimeout(TIME)
    .then(() => alpha.technical.bop(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Balance Of Power (BOP)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: BOP']).toBeDefined();
    });
});

test(`cci data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.cci(`msft`, `daily`, 60, `close`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Commodity Channel Index (CCI)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: CCI']).toBeDefined();
    });
});

test(`cmo data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.cmo(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.roc(`msft`, `daily`, 60, `close`))
    .then((data) => {
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
  return setTimeout(TIME)
    .then(() => alpha.technical.rocr(`msft`, `daily`, 60, `close`))
    .then((data) => {
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

test(`aroon data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.aroon(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Aroon (AROON)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: AROON']).toBeDefined();
    });
});

test(`aroonosc data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.aroonosc(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Aroon Oscillator (AROONOSC)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: AROONOSC']).toBeDefined();
    });
});

test(`mfi data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.mfi(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Money Flow Index (MFI)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: MFI']).toBeDefined();
    });
});

test(`trix data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.trix(`msft`, `daily`, 60, `close`))
    .then((data) => {
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

test(`ultosc data works`, () => {
  expect.assertions(10);
  return setTimeout(TIME)
    .then(() => alpha.technical.ultosc(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Ultimate Oscillator (ULTOSC)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: Time Period 1']).toEqual(7);
      expect(data['Meta Data']['5.2: Time Period 2']).toEqual(14);
      expect(data['Meta Data']['5.3: Time Period 3']).toEqual(28);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: ULTOSC']).toBeDefined();
    });
});

test(`dx data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.dx(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Directional Movement Index (DX)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: DX']).toBeDefined();
    });
});

test(`minus_di data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.minus_di(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Minus Directional Indicator (MINUS_DI)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: MINUS_DI']).toBeDefined();
    });
});

test(`plus_di data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.plus_di(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Plus Directional Indicator (PLUS_DI)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: PLUS_DI']).toBeDefined();
    });
});

test(`minus_dm data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.minus_dm(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Minus Directional Movement (MINUS_DM)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: MINUS_DM']).toBeDefined();
    });
});

test(`plus_dm data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.plus_dm(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Plus Directional Movement (PLUS_DM)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: PLUS_DM']).toBeDefined();
    });
});

test(`bbands data works`, () => {
  expect.assertions(12);
  return setTimeout(TIME)
    .then(() => alpha.technical.bbands(`msft`, `daily`, 60, `close`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Bollinger Bands (BBANDS)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6.1: Deviation multiplier for upper band']).toEqual(2);
      expect(data['Meta Data']['6.2: Deviation multiplier for lower band']).toEqual(2);
      expect(data['Meta Data']['6.3: MA Type']).toEqual(0);
      expect(data['Meta Data']['7: Series Type']).toEqual('close');
      expect(data['Meta Data']['8: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: BBANDS']).toBeDefined();
    });
});

test(`midpoint data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.midpoint(`msft`, `daily`, 60, `close`))
    .then((data) => {
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

test(`midprice data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.midprice(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Midpoint Price over period (MIDPRICE)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: MIDPRICE']).toBeDefined();
    });
});

test(`sar data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.sar(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Parabolic SAR (SAR)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: Acceleration']).toEqual(0.01);
      expect(data['Meta Data']['5.2: Maximum']).toEqual(0.2);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: SAR']).toBeDefined();
    });
});

test(`trange data works`, () => {
  expect.assertions(7);
  return setTimeout(TIME)
    .then(() => alpha.technical.trange(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('True Range (TRANGE)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: TRANGE']).toBeDefined();
    });
});

test(`atr data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.atr(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Average True Range (ATR)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: ATR']).toBeDefined();
    });
});

test(`natr data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.natr(`msft`, `daily`, 60))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Normalized Average True Range (NATR)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Period']).toEqual(60);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: NATR']).toBeDefined();
    });
});

test(`ad data works`, () => {
  expect.assertions(7);
  return setTimeout(TIME)
    .then(() => alpha.technical.ad(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Chaikin A/D Line');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: Chaikin A/D']).toBeDefined();
    });
});

test(`adosc data works`, () => {
  expect.assertions(9);
  return setTimeout(TIME)
    .then(() => alpha.technical.adosc(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Chaikin A/D Oscillator (ADOSC)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5.1: FastK Period']).toEqual(3);
      expect(data['Meta Data']['5.2: SlowK Period']).toEqual(10);
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: ADOSC']).toBeDefined();
    });
});

test(`obv data works`, () => {
  expect.assertions(7);
  return setTimeout(TIME)
    .then(() => alpha.technical.obv(`msft`, `daily`))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('On Balance Volume (OBV)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: OBV']).toBeDefined();
    });
});

test(`ht_trendline data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.ht_trendline(`msft`, `daily`, 'close'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Hilbert Transform - Instantaneous Trendline (HT_TRENDLINE)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Series Type']).toEqual('close');
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: HT_TRENDLINE']).toBeDefined();
    });
});

test(`ht_sine data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.ht_sine(`msft`, `daily`, 'close'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Hilbert Transform - SineWave (HT_SINE)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Series Type']).toEqual('close');
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: HT_SINE']).toBeDefined();
    });
});

test(`ht_trendmode data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.ht_trendmode(`msft`, `daily`, 'close'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Hilbert Transform - Trend vs Cycle Mode (HT_TRENDMODE)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Series Type']).toEqual('close');
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: HT_TRENDMODE']).toBeDefined();
    });
});

test(`ht_dcperiod data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.ht_dcperiod(`msft`, `daily`, 'close'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Hilbert Transform - Dominant Cycle Period (HT_DCPERIOD)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Series Type']).toEqual('close');
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: HT_DCPERIOD']).toBeDefined();
    });
});

test(`ht_dcphase data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.ht_dcphase(`msft`, `daily`, 'close'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Hilbert Transform - Dominant Cycle Phase (HT_DCPHASE)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Series Type']).toEqual('close');
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: HT_DCPHASE']).toBeDefined();
    });
});

test(`ht_dcphasor data works`, () => {
  expect.assertions(8);
  return setTimeout(TIME)
    .then(() => alpha.technical.ht_dcphasor(`msft`, `daily`, 'close'))
    .then((data) => {
      expect(data['Meta Data']).toBeDefined();
      expect(data['Meta Data']['1: Symbol']).toEqual('msft');
      expect(data['Meta Data']['2: Indicator']).toEqual('Hilbert Transform - Phasor Components (HT_PHASOR)');
      expect(data['Meta Data']['3: Last Refreshed']).toBeDefined();
      expect(data['Meta Data']['4: Interval']).toEqual('daily');
      expect(data['Meta Data']['5: Series Type']).toEqual('close');
      expect(data['Meta Data']['6: Time Zone']).toBeDefined();
      expect(data['Technical Analysis: HT_PHASOR']).toBeDefined();
    });
});
