const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown');

// array of questions for user
const questions = [
    // Title of Project (required)
    // Description (required)
    // Table of Contents (generate links based on )
    // Installation
    // Usage
    // License (provide list of options) (generate a badge near the top of the readme for selected license)
    // Contributing
    // Tests
    // Questions (ask for GitHub profile info and email address so that users now where to send questions)
];

// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(readme, data)
}

// function to initialize program
function init() {
    // call inquirer prompt
    // call generateMarkdown(answers)
    // call writeToFile(fileName, data)
    // console.log something to let user know process was successful
    // catch errors
}

// function call to initialize program
init();