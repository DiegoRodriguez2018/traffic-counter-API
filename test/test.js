const assert = require('chai').assert;

const utils = require('../utils/utils.js');

describe('utils/readFile.js', function() {
  describe('#Typeof result', function() {
    it('should return Object when a filePath is specified.', async function() {
      const path = './data/lines.txt';
      assert.equal(typeof (await utils.readFile(path)), 'object');
    });
  });

  describe('#Length of result', function() {
    it('should return the correct amount of entries', async function() {
      const path = './data/lines.txt';
      const entries = Object.entries(await utils.readFile(path));
      assert.equal(entries.length, 24);
    });
  });
});

describe('utils/getTotalCount.js', function() {
  describe('#Total Count', function() {
    it('should return the correct total count of cars found in a data object', function() {
      const data = {
        '2016-12-01T05:00:00': 5,
        '2016-12-01T05:30:00': 15,
        '2016-12-01T06:00:00': 20,
        '2016-12-01T06:30:00': 100
      };
      // Total count: 140 cars
      assert.equal(utils.getTotalCount(data), 140);
    });
  });
});

describe('utils/getCountPerDay.js', function() {
  describe('#Count Per Day', function() {
    it('should return the correct total count of cars found in a data object', function() {
      const data = {
        '2016-12-01T05:00:00': 1,
        '2016-12-01T08:00:00': 1,
        '2016-12-01T15:00:00': 1,
        '2016-12-01T15:30:00': 1,
        '2016-12-01T23:30:00': 1,
        '2016-12-05T09:30:00': 1,
        '2016-12-05T10:30:00': 1,
        '2016-12-08T18:00:00': 1,
        '2016-12-08T19:00:00': 1,
        '2016-12-08T22:00:00': 1,
        '2016-12-08T23:00:00': 1,
        '2016-12-09T00:00:00': 1
      };

      const expectedOutput = [
        '2016-12-01 5',
        '2016-12-05 2',
        '2016-12-08 4',
        '2016-12-09 1'
      ];

      assert.deepEqual(utils.getCountPerDay(data), expectedOutput);
    });
  });
});

describe('utils/getTop3.js', function() {
  describe('#Top 3 half hours with most cars', function() {
    it('should return a list containing the top 3 half hours with most cars.', function() {
      const data = {
        '2016-12-01T05:00:00': 1,
        '2016-12-01T08:00:00': 1,
        '2016-12-01T15:00:00': 1,
        '2016-12-01T15:30:00': 10,
        '2016-12-01T23:30:00': 1,
        '2016-12-05T09:30:00': 1,
        '2016-12-05T10:30:00': 1,
        '2016-12-08T18:00:00': 15,
        '2016-12-08T19:00:00': 1,
        '2016-12-08T22:00:00': 20,
        '2016-12-08T23:00:00': 1,
        '2016-12-09T00:00:00': 1
      };

      const expectedOutput = [
        '2016-12-08T22:00:00 20',
        '2016-12-08T18:00:00 15',
        '2016-12-01T15:30:00 10'
      ];

      assert.deepEqual(utils.getTop3(data), expectedOutput);
    });
  });
});

describe('utils/getTop3.js', function() {
  describe('#Top 3 half hours with most cars', function() {
    it('should return a list containing the top 3 half hours with most cars.', function() {
      const data = {
        '2016-12-01T05:00:00': 2,
        '2016-12-01T05:30:00': 1,
        '2016-12-01T06:00:00': 3,
        '2016-12-01T06:30:00': 5,
        '2016-12-01T07:00:00': 2,
        '2016-12-01T07:30:00': 3,
        '2016-12-01T08:00:00': 1,

        '2016-12-01T15:00:00': 1,
        '2016-12-01T15:30:00': 0,
      
        '2016-12-01T23:30:00': 0,

        '2016-12-05T09:30:00': 8,
        '2016-12-05T10:30:00': 5,
        '2016-12-05T11:30:00': 7,
        '2016-12-05T12:30:00': 6,
        '2016-12-05T13:30:00': 9,
        '2016-12-05T14:30:00': 2,
        '2016-12-05T15:30:00': 5,
      };

      const expectedOutput = ['2016-12-01T05:00:00 6',  '2016-12-01T07:00:00 6'];

      assert.deepEqual(utils.get90MinutesWithLessRecords(data), expectedOutput);
    });
  });
});
