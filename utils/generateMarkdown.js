// function to generate markdown for README
function generateMarkdown(data) {
    // generate badge url based on license
    let badgeUrl = '';
    if (data.license === 'MIT') {
        badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    
    if (data.license === 'ISC') {
        badgeUrl = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }
    
    if (data.license === 'GNU GPLv3') {
        badgeUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }

    // instantiate optional sections as empty strings
    let installationMarkdown = '';
    let contributingMarkdown = '';
    let testsMarkdown = '';

    // dynamically generate table of contents based on user answering optional questions regarding installation, contributing, tests
    let tableofContents = `## Table of Contents`;
    
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

${badgeUrl}

## Description
${data.description}

${tableofContents}
${installationMarkdown}
## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.title} is licensed under the ${data.license} license.
${contributingMarkdown}
${testsMarkdown}
## Questions
Reach out to me with any questions by connecting with me on [GitHub](https://github.com/${data.github}) or sending an email to ${data.email}.`;
}

module.exports = generateMarkdown;