# Stats reporter for Sweter

This project refers to ``sweter``. If you are not familiar with ``sweter`` then take a look at https://github.com/msn0/sweter first.

`sweter-stats-reporter` reports `domInteractive`'s median and p95. 

## Installation

`sweter-stats-reporter` requires `sweter` to be installed. `sudo npm install -g sweter` does the job! 

```sh
$ npm install sweter-custom-reporter
```

## Usage

Simply pass `sweter-stats-reporter` name via ``--custom-reporter``

```
$ sweter google.com --custom-reporter sweter-stats-reporter
```
