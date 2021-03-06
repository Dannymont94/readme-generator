const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    // Title of Project (required)
    {
        name: 'title',
        message: 'What is the title of your project? (required)',
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
        message: 'Enter the names of those who have contributed to the project, including your own. (required)',
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
        message: 'What is your GitHub username? (required)',
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
        message: 'What is your email address? (required)',
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
        message: 'Enter a description of your project. (required)',
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
    // Installation (optional)
    {
        name: 'installation',
        message: 'What are the steps required to install your project, if any? (optional)',
        type: 'input'
    },
    // Usage (required)
    {
        name: 'usage',
        message: 'Provide some instructions and examples for how your project is used. (required)',
        type: 'input',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions and examples for how your project is used!')
            }
        }
    },
    // License (required)
    {
        name: 'license',
        message: 'Enter a license for your project. (required)',
        type: 'list',
        choices: ['MIT', 'ISC', 'GNU GPLv3'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please enter a license for your project!');
                return false;
            }
        }
    },
    // Contributing (optional)
    {
        name: 'contributing',
        message: 'How can others contribute to this project? (optional)',
        type: 'input'
    },
    // Tests (optional)
    {
        name: 'tests',
        message: 'How can users run tests? (optional)',
        type: 'input'
    }
];

const mockAnswers = {
    title: 'Readme Generator',
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
function writeToFile(fileName, markdown) {
    fs.promises.writeFile(`./output/${fileName}.md`, markdown);
}

(async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const fileName = answers.title;
        const markdown = generateMarkdown(answers);
        writeToFile(fileName, markdown);
        console.log('Readme successfully generated in output folder!');
    } catch (err) {
        console.log(err);
    }
})();