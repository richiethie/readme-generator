import inquirer from "inquirer"

import fs from "fs"



inquirer
    .prompt ([
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give installation instructions for your project.', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'This READme will need instructions on how to use your application, please enter the instructions here.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter all contribution guidelines for your application.',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Enter instructions to test your application.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ])
    .then((answers) => {
        // const readmeContent = 
    })