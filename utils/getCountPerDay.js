/**
 * Returns the number of cars seen per day, for all days recorded in the data object.
 * @param {Object} data - An object with the record timestamp as key and car count as value.
 * @returns {Array} Returns an array with a sequence of Strings containing the date and the number of cars seen on that particular day.  */
function getCountPerDay(data) {
  const result = {};
  Object.keys(data).forEach(timestamp => {
    // Extracting the first 10 characters in the timestamp to obtain the yyyy-mm-dd format.
    const date = timestamp.substring(0,10);  
    if (result[date]){
      result[date] = result[date] + data[timestamp];
    } else {
      result[date] = data[timestamp];
    }
  })

  const entries = Object.entries(result);
  return entries.map(([timestamp, count]) => `${timestamp} ${count}`);
}

module.exports = getCountPerDay;
