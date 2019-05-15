const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints')

describe('calculateTotalPoints', () => {
    describe('totalPoint', () => {
        it('should return 208.3', () => {
            const actual = calculateTotalPoints(227.5, "mamucia", 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

            const expected = 208.3;

            assert.equal(actual, expected);
        });

        it('should return 137.3', () => {
            const actual = calculateTotalPoints(134, "duża", 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);

            const expected = 137.3;

            assert.equal(actual, expected);
        });

        it('should return 131.8', () => {
            const actual = calculateTotalPoints(111, "normalna", 98, [19, 19.5, 19, 19, 19], 3.2, -14.4);

            const expected = 131.8;

            assert.equal(actual, expected);
        });

        it('should return Wrong data if no value is passed', () => {
            const actual = calculateTotalPoints();

            const expected = 'Wrong data';

            assert.equal(actual, expected);
        });
    });
});

