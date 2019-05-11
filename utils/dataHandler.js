const utils = require('./utils');

async function init() {
  const path = '../data/lines.txt'  
  console.log(await utils.readFile(path));
  // utils.getTotalCount({});

}

init();