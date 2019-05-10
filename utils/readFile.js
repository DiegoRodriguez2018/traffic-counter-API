const fs = require('fs')

/**
     * Return a nicely formatted object with data from a .txt file specified in the path.
     * @param {String} filePath - The path to the .txt file to read. 
    * @returns {Object} Returns a nicely formatted object with a nested data array with all the timestamp/count pairs found in the .txt file.
     */

async function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }
      const result = {};
      // Splitting data by '\n' to obtain an array with each line as an entry.
      data.split('\n').forEach(line => {
        // Splitting each line by white space to obtain the timestamp/count pairs.
        const pair = line.split(' ');
        const timestamp = pair[0];
        const count = parseInt(pair[1]);
        // Adding the entry to the result object
        result[timestamp]=count;
      });

      resolve(result);
    });
  });
}

module.exports = readFile;