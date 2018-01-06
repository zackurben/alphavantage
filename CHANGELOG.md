0.0.1
  - Initial release

0.0.2
  - Adding initial tests

0.0.3
  - Updating documentation
  - Fixing code linting

0.0.4
  - Adding sector performance api

0.0.5
  - Adding env variable support
  - Adding output restructuring utils with tests
  - Adding CHANGELOG.md and backfilling releases
  - Adding utils to the core export
  - Adding missing tests

0.0.6
  - Increasing jest timeout
  - Updating deps

0.0.7
  - Adding env support for the api key
  - Updating deps

1.0.0
  - Adding forex support
  - Adding crypto support
  - Adding technical indicator support
  - Adding weekly and monthly adjusted time series data support
  - Updating deps
  - Fixed issue where failing requests were not going to a catch handler.

BREAKING
  - Changing the daily adjusted data to be under the daily_adjusted namespace from
    adjusted

1.1.0
  - Adding batch quote support
  - Updating jest to 22.0.4

1.1.1

BREAKING
  - Removing crypto daily, weekly, and monthly data endpoints, due to dropped
    support from AV.
