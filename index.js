import inquirer from "inquirer"

import fs from "fs"
// add to outline of READme and then done
const generateReadMe = ({title, description, installation, usage, contributing, testing, username, email}) => 
`# ${title}

## Description

 ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

 ${installation}

## Usage

 ${usage}


## License

MIT License

Copyright (c) 2022 Richie Thiesfeldt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![Bower](https://img.shields.io/bower/l/bootstrap)

## Features

If your project has a lot of features, list them here.

## How to Contribute

 ${contributing}

## Tests

 ${testing}

## Questions

 ${username}

 ${email}`

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
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
        const readmeContent = generateReadMe(answers)
        fs.writeFile("./READme.md", readmeContent, (error) => {
            if (error) throw error
            else console.log("You successfully made a new project READme!")
        })
    })