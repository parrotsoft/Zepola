// const minimist = require('minimist')

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

clear();
console.log(
    chalk.red(
        figlet.textSync('Zepola', { horizontalLayout: 'full'})
    )
)

inquirer.prompt([
    {
        type: 'list',
        name: 'proyecto',
        message: 'Que proyecto ?',
        choices: ['Angular','Laravel']
    }
]).then(answers => {
    switch(answers.proyecto) {
        case 'Angular':
            proyectoAngular();
            break;
        case 'Laravel':
                proyectoLaravel();
            break;
    }
})

function proyectoAngular() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'version',
            message: 'Que version?',
            choices: ['Angular 2','Angular 4','Angular 5','Angular 6','Angular 7','Angular 8','Angular 9']
        }
    ]).then(answers => {

    })
}

function proyectoLaravel() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'version',
            message: 'Que version?',
            choices: ['Laravel 4','Laravel 5','Laravel 6']
        }
    ]).then(answers => {

    })
}

