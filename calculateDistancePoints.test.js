const assert = require('assert');
const calculateDistancePoints = require ('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('totalPoint', () => {
        it('should return 147.6', () => {
            const actual = calculateDistancePoints(223, "mamucia", 200);

            const expected = 147.6;

            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = calculateDistancePoints();

            const expected = '0';

            assert.equal(actual, expected);
        });
    });
});