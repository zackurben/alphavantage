# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated dependencies
- Updating babel and rollup configuration to support more detailed configurations

### Removed

- Removed `delay` dev dependency
- Removed support for `TIME_SERIES_INTRADAY_EXTENDED` in favor of `TIME_SERIES_INTRADAY`
- Removed performance `SECTOR` support as it was dropped.

## [2.4.1] - 10/15/2022

### Changed

- Updated dist bundle

## [2.4.0] - 10/15/2022

### Added

- Added support for new symbol `TIME_SERIES_INTRADAY_EXTENDED`
- Added generic support for new endpoints that return csv
- Added new util `stripEol` to strip win and \*nix line endings
- Added new util `csvToJSON` to convert raw csv into json

## [2.3.1] - 10/9/2022

### Changed

- Updated the changelog to use [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format
- Updated deps

## [2.3.0] - 10/23/2021

### Fixed

- Updated dependencies
- Fixed broken tests

### Changed

- Modified jest config and folder name to follow a more standard configuration

### Added

- Adding new alpha.experimental function to support any API endpoint

## [2.2.1] - 10/4/2020

### Fixed

- Updated dependencies

## [2.2.0] - 9/3/2020

### Added

- Adding fundamental api support: OVERVIEW, INCOME_STATEMENT, BALANCE_SHEET, and CASH_FLOW

## [2.1.0] - 7/26/2020

### Added

- Adding forex intraday, daily, monthly, and weekly endpoint support.
- Adding initial typescript types.

### Fixed

- Fixing malformed bundle file

### Removed

- Removed the data interval parameter for all except intraday

## [2.0.1] - 2/26/2020

### Fixed

- Fixed UMD support for browser and Node.js environments.

## [2.0.0] - 10/8/2019 _DEPRECATED_

### Added

- Adding browser support via UMD bundle.

## [1.2.6] - 10/7/2019

### Changed

- Updating dependencies.

### Removed

- Removing sector performance test until the API works again.

## [1.2.5] - 4/15/2019

### Removed

- Removing crypto intraday support (removed from API)

## [1.2.4] - 4/5/2019

### Added

- Adding symbol search endpoint support

## [1.2.3] - 3/31/2019

### Changed

- Updating dependencies to remove audit and outdated warnings

## [1.2.2] - 3/31/2019

### Added

- Adding Time Series FX (Daily) to the polish function

## [1.2.1] - 3/31/2019

### Fixed

- Fixing documentation for SMA usage

### Removed

- Removing test for intraday crypto data (removed from API)

## [1.2.0] - 10/16/2018

### Added

- Adding global quote endpoint support

## [1.1.2] - 10/16/2018

### Changed

- Updating deps

### Fixed

- Fixing broken forex test

## [1.1.1] - 2/14/2018

### Changed

- Updating dotenv dependency

### Fixed

- Fixing documentation for data endpoints

## [1.1.0] - 1/1/2018

### Added

- Adding batch quote support

### Changed

- Updating jest to 22.0.4

## [1.0.0] - 10/2/2017

### Added

- Adding forex support
- Adding crypto support
- Adding technical indicator support
- Adding weekly and monthly adjusted time series data support

### Changed

- Updating deps

### Fixed

- Fixed issue where failing requests were not going to a catch handler.

_BREAKING_

- Changing the daily adjusted data to be under the daily_adjusted namespace from
  adjusted

## [0.0.7] - 9/19/2017

### Added

- Adding env support for the api key

### Changed

- Updating deps

## [0.0.6] - 8/30/2017

### Changed

- Increasing jest timeout
- Updating deps

## [0.0.5] - 8/13/2017

### Added

- Adding env variable support
- Adding output restructuring utils with tests
- Adding CHANGELOG.md and backfilling releases
- Adding utils to the core export
- Adding missing tests

## [0.0.4] - 8/8/2017

### Added

- Adding sector performance api

## [0.0.3] - 8/2/2017

### Changed

- Updating documentation

### Fixed

- Fixing code linting

## [0.0.2] - 8/2/2017

### Added

- Adding initial tests

## [0.0.1] - 8/2/2017

- Initial release
