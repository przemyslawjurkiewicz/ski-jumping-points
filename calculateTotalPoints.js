const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);
    const totalPoints = Math.round(distancePoints * 10 + stylePoints * 10 + windFactor * 10 + gateFactor * 10) / 10


    return (!isNaN(totalPoints) ? totalPoints : 'Wrong data');



}

module.exports = calculateTotalPoints;