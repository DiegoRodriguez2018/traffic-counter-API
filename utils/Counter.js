const utils = require('./utils');

// Note that the default path is "data/lines.txt", but Counter also allows custom paths to be passed.
const Counter = function(path = 'data/lines.txt') {
  this.path = path;
};

Counter.prototype.getTotalCount = function() {
  return new Promise((resolve, reject) => {
    utils
      .readFile(this.path)
      .then(data => {
        resolve(utils.getTotalCount(data));
      })
      .catch(err => {
        reject(err);
      });
  });
};

Counter.prototype.getCountPerDay = function() {
  return new Promise((resolve, reject) => {
    utils
      .readFile(this.path)
      .then(data => {
        resolve(utils.getCountPerDay(data));
      })
      .catch(err => {
        reject(err);
      });
  });
};

Counter.prototype.getTopHalfHourPeriods = function() {
  return new Promise((resolve, reject) => {
    utils
      .readFile(this.path)
      .then(data => {
        resolve(utils.getTopHalfHourPeriods(data));
      })
      .catch(err => {
        reject(err);
      });
  });
};

Counter.prototype.getBottomHourAndAHalfPeriods = function() {
  return new Promise((resolve, reject) => {
    utils
      .readFile(this.path)
      .then(data => {
        resolve(utils.getBottomHourAndAHalfPeriods(data));
      })
      .catch(err => {
        reject(err);
      });
  });
};

Counter.prototype.getAllData = function() {
  return new Promise((resolve, reject) => {
    utils
      .readFile(this.path)
      .then(data => {
        const totalCount = utils.getTotalCount(data);
        const countPerDay = utils.getCountPerDay(data);
        const topHalfHourPeriods = utils.getTopHalfHourPeriods(data);
        const bottomHourAndAHalfPeriods = utils.getBottomHourAndAHalfPeriods(data);
        const dataSource = this.path.split('/')[1];
        const calculatedAt = new Date();

        const result = {
          totalCount,
          countPerDay,
          topHalfHourPeriods,
          bottomHourAndAHalfPeriods,
          dataSource,
          calculatedAt
        };
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = Counter;
