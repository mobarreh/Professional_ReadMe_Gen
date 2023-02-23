// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'projectDescription',
    },

    {
        type: 'input',
        message: 'Add a table of contents',
        name: 'tableofContents',
    },

    {
        type: 'input',
        message: 'What needs to be installed to application?',
        name: 'install',
    },

    {
        type: 'input',
        message: 'What is the purpose of this application',
        name: 'usage',
    },

    {
        type: 'list',
        message: 'Choose a license for your project from the following options?',
        choices: ['MIT','ISC'],
        name: 'license',
    },

    {
        type: 'input',
        message: 'How can other developers contribute to the project',
        name: 'contributing',
    },

    {
        type: 'input',
        message: 'How can other developers test this application?',
        name: 'testing',
    },

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubName',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];
// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error) => { if (error) throw error; console.log("Repo created!") });
}

// TODO: Create a function to initialize app
function init() {
    // Initalises the inquirer with values from the quesitons array
    return inquirer.prompt(questions)
        .then((data) => {
            // Passes through the information gathered into the generateMarkdown module so that the values can be correctly formated to create the professional ReadMe
            const markDown = generateMarkdown(data)
            writeToFile("readme.md", markDown)
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}
// Function call to initialize app
init();
