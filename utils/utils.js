const readFile = require('./readFile');
const getTotalCount = require('./getTotalCount');
const getCountPerDay = require('./getCountPerDay');
const getTop3 = require('./getTop3');
const get90MinutesWithLessRecords = require('./get90MinutesWithLessRecords');

module.exports = {
  readFile,
  getTotalCount,
  getCountPerDay,
  getTop3,
  get90MinutesWithLessRecords
};
