const calculateStylePoints = (styleNotes) => {

  const min = styleNotes ? Math.min(...styleNotes) : 0;
  const max = styleNotes ? Math.max(...styleNotes) : 0;
  const sum = styleNotes ? styleNotes.reduce((total, value) => total + value) : 0;

  return (sum - max - min);
};

module.exports = calculateStylePoints;