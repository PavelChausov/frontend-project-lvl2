import Commander from 'commander';

const myApp = Commander
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0');
  // .parse(process.argv);

const runApp = () => {
  myApp.parse(process.argv);
};

export default runApp;
