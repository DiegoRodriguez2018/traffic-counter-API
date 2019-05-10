const readFile = require('./readFile');

async function init() {
  const path = '../data/lines.txt'  
  console.log(await readFile());
}

init();