# 0.0.1

- Initial release

# 0.0.2

- Adding initial tests

# 0.0.3

- Updating documentation
- Fixing code linting

# 0.0.4

- Adding sector performance api

# 0.0.5

- Adding env variable support
- Adding output restructuring utils with tests
- Adding CHANGELOG.md and backfilling releases
- Adding utils to the core export
- Adding missing tests

# 0.0.6

- Increasing jest timeout
- Updating deps

# 0.0.7

- Adding env support for the api key
- Updating deps

# 1.0.0

- Adding forex support
- Adding crypto support
- Adding technical indicator support
- Adding weekly and monthly adjusted time series data support
- Updating deps
- Fixed issue where failing requests were not going to a catch handler.

_BREAKING_

- Changing the daily adjusted data to be under the daily_adjusted namespace from
  adjusted

# 1.1.0

- Adding batch quote support
- Updating jest to 22.0.4

# 1.1.1

- Updating dotenv dependency
- Fixing documentation for data endpoints

# 1.1.2

- Updating deps
- Fixing broken forex test

# 1.2.0

- Adding global quote endpoint support

# 1.2.1

- Fixing documentation for SMA usage
- Removing test for intraday crypto data (removed from API)

# 1.2.2

- Adding Time Series FX (Daily) to the polish function

# 1.2.3

- Updating dependencies to remove audit and outdated warnings

# 1.2.4

- Adding symbol search endpoint support

# 1.2.5

- Removing crypto intraday support (removed from API)

# 1.2.6

- Updating dependencies.
- Removing sector performance test until the API works again.

# 2.0.0 - _DEPRECATED_

- Adding browser support via UMD bundle.

# 2.0.1

- Fixed UMD support for browser and Node.js environments.

# 2.1.0

- Adding forex intraday, daily, monthly, and weekly endpoint support.
- Adding initial typescript types.
- Fixing malformed bundle file
- Removed the data interval parameter for all except intraday

# 2.2.0

- Adding fundamental api support: OVERVIEW, INCOME_STATEMENT, BALANCE_SHEET, and CASH_FLOW
