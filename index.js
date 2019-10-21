// const minimist = require('minimist')

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Zepola', { horizontalLayout: 'full'})
    )
)

