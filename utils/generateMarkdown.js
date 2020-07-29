// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
need to dynamically generate based on user's selections

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
//     title: 'readme generator', (REQUIRED)
//     credits: 'Daniel Monterrosa', (REQUIRED)
//     github: 'Dannymont94', (REQUIRED)
//     email: 'dannym94@gmail.com', (REQUIRED)
//     description: 'It generates readme files for your projects.', (REQUIRED)
//     installation: 'Clone repo, install dependencies with node.', (OPTIONAL)
//     usage: 'Run index with node and answer questions to generate a readme file.', (OPTIONAL)
//     license: 'MIT', (REQUIRED)
//     contributing: 'Please provide credit.', (OPTIONAL)
//     tests: 'Run them as you please.' (OPTIONAL)
// };