const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const logFile = async () => {
  try {
    const filePath = resolve('./package.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.log(err);;
  }};

logFile();