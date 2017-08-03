'use strict';

test(`initialization without a config throws an error`, () => {
    expect.assertions(1);
    try {
        const alpha = require('../')()
    }
    catch (e) {
        expect(e.message).toEqual(`Missing config for alphavantage module`)
    }
});

test(`initialization without an api key throws an error`, () => {
    expect.assertions(1);
    try {
        const alpha = require('../')({})
    }
    catch (e) {
        expect(e.message).toEqual(`Missing Alpha Vantage config settings: key`)
    }
})
