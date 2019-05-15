const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let points = hillSize === 'mamucia' ? 120 : 60;
    let meterValue = hillSize === 'mamucia' ? 1.2 : hillSize === 'duża' ? 1.8 : 2;
    let distancePoint = distance > kPoint ? points + ((distance - kPoint) * meterValue) : points - ((kPoint - distance) * meterValue);
    
    return distancePoint ? distancePoint : '0';
};

module.exports = calculateDistancePoints;