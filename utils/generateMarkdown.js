// function to generate markdown for README
function generateMarkdown(data) {
    // need to generate badge based on license


    // instantiate optional sections as empty strings
    let installationMarkdown = '';
    let contributingMarkdown = '';
    let testsMarkdown = '';

    // dynamically generate table of contents based on user answering optional questions regarding installation, contributing, tests
    let tableofContents = `##Table of Contents`;
    
    // generate installation section only if user provides installation instructions
    if (data.installation) { 
        tableofContents += `
* [Installation](#installation)`;

        installationMarkdown = `
## Installation
${data.installation}
`;
    }

    tableofContents += `
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)`;
    
    // generate contributing section only if user provides contributor names
    if (data.contributing) {
        tableofContents += `
* [Contributing](#contributing)`;

        contributingMarkdown = `
## Contributing
${data.contributing}
`;
    }
    
    // generate tests section only if user provides test instructions
    if (data.tests) {
        tableofContents += `
* [Tests](#tests)`;

        testsMarkdown = `## Tests
${data.tests}
`;
    }

    tableofContents += `
* [Questions](#questions)`;

    return `# ${data.title}

## Description
${data.description}

${tableofContents}
${installationMarkdown}
## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}
${contributingMarkdown}
${testsMarkdown}
## Questions
Reach out to me with any questions by connecting with me on [GitHub](https://github.com/${data.github}) or sending an email to ${data.email}.`;
}

module.exports = generateMarkdown;