# AlphaVantage

```
Note: This is a WIP
```

This is a simple wrapper around the [Alpha Vantage API](https://www.alphavantage.co/documentation/). I have no affiliation with AlphaAdvantage.

All contributions are welcome! This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for
additional information.

### Roadmap

 - [x] View basic symbol data
 - [x] Add code linting
 - [x] Add code coverage
 - [ ] Add documentation
 - [ ] Add more test coverage
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
const alpha = require('alphavantage')({ key: 'qweqweqwe' });

alpha.data.intraday(`msft`).then(data => {
  console.log(data);
});

alpha.data.daily(`msft`).then(data => {
  console.log(data);
});

alpha.data.adjusted(`msft`).then(data => {
  console.log(data);
});

alpha.data.weekly(`msft`).then(data => {
  console.log(data);
});

alpha.data.monthly(`msft`).then(data => {
  console.log(data);
});

```

#### Contact
  - Author: Zack Urben
  - Twitter: https://twitter.com/zackurben (better)
  - Contact: zackurben@gmail.com
