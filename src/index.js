import commander from 'commander';
import app from './app.js';

const myApp = commander
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .arguments('<filepath1> <filepath2>')
  .action(app)
  .option('-f, --format [type]', 'output format');

const runApp = () => {
  myApp.parse(process.argv);
  if (myApp.format !== undefined) {
    console.log(`format: ${myApp.format}`);
  }
};

export default runApp;
