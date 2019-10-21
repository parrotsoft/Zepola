// const minimist = require('minimist')

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Zepola', { horizontalLayout: 'full'})
    )
)

inquirer.prompt([
    {
        type: 'list',
        name: 'proyecto',
        message: 'Que lenguaje utilizamos',
        choices: ['Angular','Laravel','Python']
    }
]).then(answers => {
    switch(answers.proyecto) {
        case 'Angular':
            console.log('Crearemos un proyecto de Angular...')
            break;
        case 'Laravel':
                console.log('Crearemos un proyecto de Laravel...')
            break;
        case 'Python':
            console.log('Crearemos un proyecto de Python...')
            break;
    }
})

