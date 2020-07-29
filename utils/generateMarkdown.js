// function to generate markdown for README
function generateMarkdown(data) {
    // need to generate badge based on license
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Reach out to me with any questions by connecting with me on [GitHub](https://github.com/${data.github}) or sending an email to ${data.email}.
`;
}

module.exports = generateMarkdown;

// {
//     title: 'readme generator',
//     credits: 'Daniel Monterrosa',
//     github: 'Dannymont94',
//     email: 'dannym94@gmail.com',
//     description: 'It generates readme files for your projects.',
//     installation: 'Clone repo, install dependencies with node.',
//     usage: 'Run index with node and answer questions to generate a readme file.',
//     license: 'MIT',
//     contributing: 'Please provide credit.',
//     tests: 'Run them as you please.'
// };