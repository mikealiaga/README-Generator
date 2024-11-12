// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Name of the project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the project about?',
        name: 'description',

    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },   
    {
        type: 'checkbox',
        message: 'Please select your license',
        name: 'licence',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
      {
        type: 'input',
        message: 'Tell other developers how to contribute:',
        name: 'contribute',
    },
       {
        type: 'input',
        message: 'Write the test instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },


];

// Function to generate README content
function generateReadme(data) {
    return `
# ${data.title}

## Description
${data.description}

## Link to video tutorial
[Walkthrough video](https://drive.google.com/drive/folders/12FbjA0odr0boqVGlzofJHGjjr3yaLfer?usp=sharing)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.licence} license.

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions?
For questions, reach out to [${data.email}](mailto:${data.email}) or browse ${data.github} on Github

`;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README file created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const readmeContent = generateReadme(responses);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
