'use strict';

import { setTimeout } from 'node:timers/promises';
import Alpha from '..';
const alpha = Alpha({ key: process.env.AV_KEY });

jest.setTimeout(30000);
jest.unmock('cross-fetch');
const TIME = 1000;

test(`company overview works`, () => {
  expect.assertions(45);
  return setTimeout(TIME)
    .then(() => alpha.fundamental.company_overview(`ibm`))
    .then((data) => {
      expect(data['Symbol']).toEqual('IBM');
      expect(data['AssetType']).toBeDefined();
      expect(data['Name']).toBeDefined();
      expect(data['Description']).toBeDefined();
      expect(data['Exchange']).toBeDefined();
      expect(data['Currency']).toBeDefined();
      expect(data['Country']).toBeDefined();
      expect(data['Sector']).toBeDefined();
      expect(data['Industry']).toBeDefined();
      expect(data['Address']).toBeDefined();
      expect(data['FiscalYearEnd']).toBeDefined();
      expect(data['LatestQuarter']).toBeDefined();
      expect(data['MarketCapitalization']).toBeDefined();
      expect(data['EBITDA']).toBeDefined();
      expect(data['PERatio']).toBeDefined();
      expect(data['PEGRatio']).toBeDefined();
      expect(data['BookValue']).toBeDefined();
      expect(data['DividendPerShare']).toBeDefined();
      expect(data['DividendYield']).toBeDefined();
      expect(data['EPS']).toBeDefined();
      expect(data['RevenuePerShareTTM']).toBeDefined();
      expect(data['ProfitMargin']).toBeDefined();
      expect(data['OperatingMarginTTM']).toBeDefined();
      expect(data['ReturnOnAssetsTTM']).toBeDefined();
      expect(data['ReturnOnEquityTTM']).toBeDefined();
      expect(data['RevenueTTM']).toBeDefined();
      expect(data['GrossProfitTTM']).toBeDefined();
      expect(data['DilutedEPSTTM']).toBeDefined();
      expect(data['QuarterlyEarningsGrowthYOY']).toBeDefined();
      expect(data['QuarterlyRevenueGrowthYOY']).toBeDefined();
      expect(data['AnalystTargetPrice']).toBeDefined();
      expect(data['TrailingPE']).toBeDefined();
      expect(data['ForwardPE']).toBeDefined();
      expect(data['PriceToSalesRatioTTM']).toBeDefined();
      expect(data['PriceToBookRatio']).toBeDefined();
      expect(data['EVToRevenue']).toBeDefined();
      expect(data['EVToEBITDA']).toBeDefined();
      expect(data['Beta']).toBeDefined();
      expect(data['52WeekHigh']).toBeDefined();
      expect(data['52WeekLow']).toBeDefined();
      expect(data['50DayMovingAverage']).toBeDefined();
      expect(data['200DayMovingAverage']).toBeDefined();
      expect(data['SharesOutstanding']).toBeDefined();
      expect(data['DividendDate']).toBeDefined();
      expect(data['ExDividendDate']).toBeDefined();
    });
});

test(`income statement works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.fundamental.income_statement(`ibm`))
    .then((data) => {
      expect(data['annualReports']).toBeDefined();
      expect(data['quarterlyReports']).toBeDefined();
    });
});

test(`balance sheet works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.fundamental.balance_sheet(`ibm`))
    .then((data) => {
      expect(data['annualReports']).toBeDefined();
      expect(data['quarterlyReports']).toBeDefined();
    });
});

test(`cash flow works`, () => {
  expect.assertions(2);
  return setTimeout(TIME)
    .then(() => alpha.fundamental.cash_flow(`ibm`))
    .then((data) => {
      expect(data['annualReports']).toBeDefined();
      expect(data['quarterlyReports']).toBeDefined();
    });
});
