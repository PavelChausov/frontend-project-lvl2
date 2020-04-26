import Commander from 'commander';

const myApp = Commander
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(`first config: ${firstConfig}`);
    console.log(`second config: ${secondConfig}`);
  })
  .option('-f, --format [type]', 'output format');

const runApp = () => {
  myApp.parse(process.argv);
  if (myApp.format !== undefined) {
    console.log(`format: ${myApp.format}`);
  }
};

export default runApp;
