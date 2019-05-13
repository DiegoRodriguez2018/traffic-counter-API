const readFile = require('./readFile');
const getTotalCount = require('./getTotalCount');
const getCountPerDay = require('./getCountPerDay');
const getTopHalfHourPeriods = require('./getTopHalfHourPeriods');
const getBottomHourAndAHalfPeriods = require('./getBottomHourAndAHalfPeriods');

module.exports = {
  readFile,
  getTotalCount,
  getCountPerDay,
  getTopHalfHourPeriods,
  getBottomHourAndAHalfPeriods
};
