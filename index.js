const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
function askQuestions() {
    return inquirer.prompt([
        // Title of Project (required)
        {
            name: 'title',
            message: 'What is the title of your project?',
            type: 'input',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        // Credits (required)
        {
            name: 'credits',
            message: 'Enter the names of those who have contributed to the project.',
            type: 'input',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter the names of those who contributed to the project!')
                }
            }
        },
        // GitHub Username (required)
        {
            name: 'github',
            message: 'Enter your GitHub username.',
            type: 'input',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!')
                }
            }
        },
        // Email Address (required)
        {
            name: 'email',
            message: 'Enter your email address.',
            type: 'input',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                }
            }
        },
        // Description (required)
        {
            name: 'description',
            message: 'Enter a description for your project.',
            type: 'input',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        // Installation
        {
            name: 'installation',
            message: 'What are the steps required to install your project, if any?',
            type: 'input'
        },
        // Usage
        {
            name: 'usage',
            message: 'Provide some instructions and examples for how your project is used.',
            type: 'input'
        },
        // License (provide list of options) (need to generate a badge near the top of the readme for selected license)
        {
            name: 'license',
            message: 'Enter a license for your project.',
            type: 'input',
            default: 'MIT'
        },
        // Contributing
        {
            name: 'contributing',
            message: 'How can others contribute to this project?',
            type: 'input'
        },
        // Tests
        {
            name: 'tests',
            message: 'Provide examples on how to run the tests provided for this project.',
            type: 'input'
        }
        // Table of Contents (generate links based on names of key value pairs in answers object)
    ]);
}

const mockAnswers = {
    title: 'readme generator',
    credits: 'Daniel Monterrosa',
    github: 'Dannymont94',
    email: 'dannym94@gmail.com',
    description: 'It generates readme files for your projects.',
    installation: 'Clone repo, install dependencies with node.',
    usage: 'Run index with node and answer questions to generate a readme file.',
    license: 'MIT',
    contributing: 'Please provide credit.',
    tests: 'Run them as you please.'
};

// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(readme, data)
}

askQuestions()
    .then(answers => console.log(mockAnswers))
// call generateMarkdown(answers)
// call writeToFile(fileName, data)
// console.log something to let user know process was successful
// catch errors
    .catch(err => console.log(err));