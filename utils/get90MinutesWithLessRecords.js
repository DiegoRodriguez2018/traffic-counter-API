//TODO: Add method descriptions.
function getDifferenceInMinutes(date1, date2) {
  const diffMilliseconds = date2 - date1; // in milliseconds
  const diffMinutes = diffMilliseconds / (1000 * 60);
  return diffMinutes;
}

function startsConsecutive90Minutes(timestamp1, timestamp2, timestamp3) {
  if (getDifferenceInMinutes(timestamp1, timestamp2) === 30) {
    if (getDifferenceInMinutes(timestamp2, timestamp3) === 30) {
      return true;
    }
  }
  return false;
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
        const timestamp1 = new Date(entries[index][0]);
        const timestamp2 = new Date(entries[index + 1][0]);
        const timestamp3 = new Date(entries[index + 2][0]);
        if (startsConsecutive90Minutes(timestamp1, timestamp2, timestamp3)) {
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

function sortDescending(entries) {
  // Sorting entries in descending order.
  const sortedEntries = entries.sort((a, b) => a[1] - b[1]);
  return sortedEntries;
}

/**
 * Return the 90 minutes period with least cars recorded, based on the data object.
 * @param {Object} data - An object with the record timestamp as key and car count as value.
 * @returns {Array} Returns an Array with the 90 minutes period (or periods) with the least cars recorded.  */
function get90MinutesWithLessRecords(data) {
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

module.exports = get90MinutesWithLessRecords;
