const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('totalPoint', () => {
        it('should return 55', () => {
            const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);

            const expected = 55;

            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = calculateStylePoints();

            const expected = '0';

            assert.equal(actual, expected);
        });
    });
});