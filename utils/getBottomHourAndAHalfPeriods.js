/**
 * Checks if two dates constitute a 30-minute consecutive period or not.
 * @param {date}  startTime - A date object representing the starting time.
 * @param {date}  endTime - A date object representing the ending time.
 * @returns {Boolean} - Returns true if the dates are a consecutive 30-minutes periods and false otherwise.  */
function is30MinutesPeriod(startTime, endTime) {
  const diffMilliseconds = endTime - startTime;
  const diffMinutes = diffMilliseconds / (1000 * 60);
  return diffMinutes === 30 ? true : false;
}

/**
 * Checks if a group of timestamps are consecutive 90-minutes periods.
 * @param {string[]} timestamps - An array of strings consisting of three entries, each one representing a timestamp in yyyy-mm-dd T hh:mm:ss format. (ISO 8601).
 * @returns {Boolean} - Returns true if the first timestamp starts a 90-minutes period and false otherwise.  */
function startsConsecutive90Minutes(timestamps) {
  // Mapping all the timestamps in the array, converting each to a Date object, and deconstructing the result to individual consts.
  const [date1, date2, date3] = timestamps.map(
    timestamp => new Date(timestamp)
  );
  // true if they are consecutive periods, false otherwise.
  const periodsConsecutive =
    is30MinutesPeriod(date1, date2) && is30MinutesPeriod(date2, date3);
  return periodsConsecutive ? true : false;
}

/**
 * Returns an object listing only the 90 minutes consecutive periods and corresponding car count.
 * @param {Object} data - An object with the record timestamp as key and car count as value.
 * @returns {Object} Returns an object with the same format than data object, but only including the 90 minutes consecutive periods and corresponding car count.  */
function getConsecutive90MinutesPeriods(data) {
  const entries = Object.entries(data);
  const result = entries
    .map((entry, index) => {
      if (entries[index + 1] && entries[index + 2]) {
        const timestamps = [
          entries[index][0],
          entries[index + 1][0],
          entries[index + 2][0]
        ];
        if (startsConsecutive90Minutes(timestamps)) {
          // If starts a consecutive 90 minutes period, we calculate the number of cars seen during that period.
          const totalCount =
            entries[index][1] + entries[index + 1][1] + entries[index + 2][1];
          return [entries[index][0], totalCount];
        }
      }
    })
    .filter(entry => entry !== undefined);
  return result;
}

/**
 * Sorts an entries array in descending order.
 * @param {array} entries - A 2D array consisting of timestamp/count pairs.
 * eg.  [ [ '2016-12-01T05:00:00', 6 ], [ '2016-12-01T05:30:00', 9 ]]
 * @returns {array} - Returns an 2d array in the same format than the input but sorted in descending order by count value.
 */
function sortDescending(entries) {
  // Sorting entries in descending order.
  const sortedEntries = entries.sort((a, b) => a[1] - b[1]);
  return sortedEntries;
}

/**
 * Return the 90 minutes period with least cars recorded, based on the data object.
 * @param {Object} data - An object with the record timestamp as key and car count as value.
 * @returns {Array} Returns an Array with the 90 minutes period (or periods) with the least cars recorded.  */
function getBottomHourAndAHalfPeriods(data) {
  const consecutivePeriods = getConsecutive90MinutesPeriods(data);
  const sorted = sortDescending(consecutivePeriods);
  const result = [];
  // Adding the entry with the minimum count to the result.
  result.push(sorted[0]);
  const minCount = sorted[0][1];
  // Checking if there more than one 90 Minutes period with a minimum car count. Implementing for-loop/break-statement to avoid fully iterating the array again. Note we are starting at index = 1.
  for (let index = 1; index < sorted.length; index++) {
    const entry = sorted[index];
    if (entry[1] === minCount) {
      result.push(entry);
    } else {
      break;
    }
  }
  const formattedResult = result.map(
    ([timestamp, count]) => `${timestamp} ${count}`
  );
  return formattedResult;
}

module.exports = getBottomHourAndAHalfPeriods;
