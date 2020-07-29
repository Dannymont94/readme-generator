// function to generate markdown for README
function generateMarkdown(data) {
    // need to generate badge based on license
    console.log(data);

    // dynamically generate table of contents based on user answering optional questions regarding installation, contributing, tests
    let tableofContents = `##Table of Contents`;

    if (data.installation) { 
        tableofContents += `
* [Installation](#installation)`;
    }

    tableofContents += `
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)`;
    
    if (data.contributing) {
        tableofContents += `
* [Contributing](#contributing)`;
    }
    
    if (data.tests) {
        tableofContents += `
* [Tests](#tests)`;
    }

    tableofContents += `
* [Questions](#questions)`;

    // generate installation section only if user provides installation instructions

    // generate contributing section only if user provides contributor names

    // generate tests section only if user provides test instructions

    return `# ${data.title}

## Description
${data.description}

${tableofContents}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

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