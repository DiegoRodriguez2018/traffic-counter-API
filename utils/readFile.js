const fs = require('fs');

/**
 * Reads .txt file and generates a formatted object with timestamp/count pairs.
 * @param {String} filePath - The path to the .txt file to read.
 * @returns {Object} Returns a formatted object with a nested data array with all the timestamp/count pairs found in the .txt file.
 */

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (data){
        const result = {};
        // Splitting data by '\n' to obtain an array with each line as an entry.
        data.split('\n').forEach(line => {
          // Splitting each line by white space to obtain the timestamp/count pairs.
          const pair = line.split(' ');
          const timestamp = pair[0];
          const count = parseInt(pair[1]);
          // Adding the entry to the result object
          result[timestamp] = count;
        });
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = readFile;
