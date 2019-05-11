const assert = require('chai').assert;

const utils = require('../utils/utils.js');

describe('utils/readFile.js', function() {
  describe('#typeof readFile(filePath) result', function() {
    it('should return Object when a filePath is specified.', async function() {
      const path = './data/lines.txt';
      assert.equal(typeof (await utils.readFile(path)), 'object');
    });
  });

  describe('#length of readFile(filePath) result', function() {
    it('should return the correct amount of entries', async function() {
      const path = './data/lines.txt';
      const entries = Object.entries(await utils.readFile(path));
      assert.equal(entries.length, 24);
    });
  });
});

describe('utils/getTotalCount.js', function() {
  describe('#getTotalCount(data)', function() {
    it('should return the correct total count of cars found in a data object', function() {
      const data = {
        '2016-12-01T05:00:00': 5,
        '2016-12-01T05:30:00': 15,
        '2016-12-01T06:00:00': 20,
        '2016-12-01T06:30:00': 100,
      };
      // Total count: 140 cars
      assert.equal(utils.getTotalCount(data), 140);
    });
  });
});
