/**
     * Return the total count of cars recorded in a data object. 
     * @param {Object} data - An object with the record timestamp as key and car count as value.  
    * @returns {Integer} Returns the total count of cars recorded in the data object. */

function getTotalCount(data){
  const values = Object.values(data);
  return values.reduce((accumulator, current)=> accumulator + current);
}

module.exports = getTotalCount;