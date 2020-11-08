import commander from 'commander';
import gendiff from './gendiff.js';

const myApp = commander
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .arguments('<filepath1> <filepath2>')
  .action((path1, path2) => console.log(gendiff(path1, path2)))
  .option('-f, --format [type]', 'output format');

const runApp = () => {
  myApp.parse(process.argv);
  if (myApp.format !== undefined) {
    console.log(`format: ${myApp.format}`);
  }
};

export default runApp;
