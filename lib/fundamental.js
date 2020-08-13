'use strict';

import Util from './util';

export default (config) => {
  const util = Util(config);

  const fundamental = (fn) => (symbol) => util.fn(fn)({ symbol });

  return {
    company_overview: fundamental('OVERVIEW'),
    income_statement: fundamental('INCOME_STATEMENT'),
    balance_sheet: fundamental('BALANCE_SHEET'),
    cash_flow: fundamental('CASH_FLOW')
  };
};
