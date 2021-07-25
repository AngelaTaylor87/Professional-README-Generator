// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const markdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions =
    [
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'What is the name of your project',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Enter github username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Step by step decription for installation of your project.',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Supply example and instuctions for use, also include screenshots as needed.',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'Provide name of other collaborators, and links to github profiles. List tools used.',
            name: 'Contributing',
        },
        {
            type: 'list',
            name: 'Licenses',
            message: 'Choose a license for your project.',
            choices: ['Apache 2.0 License',
                'Boost Software License 1.0',
                'BSD 3-Clause License',
                'Eclipse Public License 1.0',
                'GNU GPL v3',
                'IBM Public License Version 1.0',
                'ISC License (ISC)',
                'The MIT License',
                'Mozilla Public License 2.0',]
        },
        {
            type: 'input',
            message: 'List project features',
            name: 'Features'
        }
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('readme.md', markdown({ ...answers }))
    })
}
// Function call to initialize app
init();
