// function to generate markdown for README
function generateMarkdown(data) {
    // need to generate badge based on license
    console.log(data);

    let installation = '';
    let contributing = '';
    let tests = '';

    // dynamically generate table of contents based on user answering optional questions regarding installation, contributing, tests
    let tableofContents = `##Table of Contents`;
    
    // generate installation section only if user provides installation instructions
    if (data.installation) { 
        tableofContents += `
* [Installation](#installation)`;

        installation = `
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

        contributing = `
## Contributing
${data.contributing}
`;
    }
    
    // generate tests section only if user provides test instructions
    if (data.tests) {
        tableofContents += `
* [Tests](#tests)`;

        tests = `## Tests
${data.tests}
`;
    }

    tableofContents += `
* [Questions](#questions)`;



    return `# ${data.title}

## Description
${data.description}

${tableofContents}
${installation}
## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}
${contributing}
${tests}
## Questions
Reach out to me with any questions by connecting with me on [GitHub](https://github.com/${data.github}) or sending an email to ${data.email}.`;
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