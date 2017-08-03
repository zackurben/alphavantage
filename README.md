# AlphaVantage

```
Note: This is a WIP
```

This is a simple wrapper around the [Alpha Vantage API](https://www.alphavantage.co/documentation/). I have no affiliation with AlphaAdvantage.

All contributions are welcome! This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for
additional information.

**Checkout the [API DOCS](/DOCS.md) for full API documentation**

### Roadmap

 - [x] View basic symbol data
 - [x] Add code linting
 - [x] Add code coverage
 - [x] Add documentation
 - [x] Add more test coverage
 - [ ] Add CI/CD support
 - [ ] Add Sector Performance data
 - [ ] Add Technical indicators data
 - [ ] Add utils to clean up response data

#### Installation
```bash
npm i alphavantage
```

#### Usage
```javascript
/**
 * Init alphavantage with your API key.
 *
 * @param {String} key
 *   Your AlphaVantage API key.
 */
const alpha = require('alphavantage')({ key: 'qweqweqwe' });

/**
 * Data functions: Short term
 *
 * Types available: intraday
 *
 * All of the data functions have the same signature:
 *   alpha.data.intraday(symbol [, size [, type [, interval]]])
 *
 * @param {String} symbol
 *   The stock ticker symbol to get data for.
 * @param [String] size
 *   The result size to fetch. Available: compact (last 100pts) and full (all, very large).
 * @param [String] type
 *   The datatype to getch. Available: json and csv
 * @param [Number] interval
 *   The time interval (mins) inbetween data points. Available: 1, 5, 15, 30, and 60
 *
 * @returns {Promise}
 *   The request promise.
 */
alpha.data.intraday(`msft`).then(data => {
  console.log(data);
});

/**
 * Data functions: Long Term
 *
 * Types available: daily, adjusted, weekly, and monthly
 *
 * All of the data functions have the same signature:
 *   alpha.data.<type>(symbol [, size [, type]])
 *
 * @param {String} symbol
 *   The stock ticker symbol to get data for.
 * @param [String] size
 *   The result size to fetch. Available: compact (last 100pts) and full (all, very large).
 * @param [String] type
 *   The datatype to getch. Available: json and csv
 *
 * @returns {Promise}
 *   The request promise.
 */
alpha.data.<type>(`msft`).then(data => {
  console.log(data);
});
```

#### Contact
  - Author: Zack Urben
  - Twitter: https://twitter.com/zackurben (better)
  - Contact: zackurben@gmail.com
