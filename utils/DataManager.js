const utils = require('./utils');

const DataManager = function() {};

// const top3 = utils.getTop3(data);
// const periodWithLessRecords = utils.get90MinutesWithLessRecords(data);

DataManager.prototype.getTotalCount = function() {
  return new Promise((resolve, reject) => {
    const path = 'data/lines.txt';
    utils.readFile(path).then(data => {
      resolve(utils.getTotalCount(data));
    })
    .catch(err=>{
      reject(err);
    });
  });
};

DataManager.prototype.getCountPerDay = function() {
  return new Promise((resolve, reject) => {
    const path = 'data/lines.txt';
    utils.readFile(path).then(data => {
      resolve(utils.getCountPerDay(data));
    })
    .catch(err=>{
      reject(err);
    });
  });
};

DataManager.prototype.getTop3 = function() {
  return new Promise((resolve, reject) => {
    const path = 'data/lines.txt';
    utils.readFile(path).then(data => {
      resolve(utils.getTop3(data));
    })
    .catch(err=>{
      reject(err);
    });
  });
};

// Returning an instance so is ready to use in Handler.js
module.exports = new DataManager();
