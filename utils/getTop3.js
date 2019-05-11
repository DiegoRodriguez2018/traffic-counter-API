/**
 * Returns an array containing the top 3 half hours with most cars recorded in a data object.
 * @param {Object} data - An object with the record timestamp as key and car count as value.
 * @returns {Array} Returns the total count of cars recorded in the data object. */

function getTop3(data) {
  const entries = Object.entries(data);
  // Sorting entries in descending order.
  const sortedEntries = entries.sort((a,b)=>b[1]-a[1]);
  const top3 = sortedEntries.slice(0,3);
  return top3.map(([timestamp, count])=>`${timestamp} ${count}`);
}

module.exports = getTop3;