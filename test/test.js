var assert = require('assert');
const readFile = require('../utils/readFile');

describe('utils', function() {
  describe('#typeof readFile(filePath) result', function() {
    it('should return Object when a filePath is specified.', async function(){
      const path = './data/lines.txt';  
      assert.equal('object',typeof await readFile(path));
    });
  });

  describe('#length of readFile(filePath) result', function() {
    it('should return the correct amount of entries', async function(){
      const path = './data/lines.txt';
      const entries = Object.entries(await readFile(path));
      assert.equal(24, entries.length);
    });
  });


});