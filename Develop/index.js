// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: nameInput => nameInput ? true : 'Please provide a project title.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
        validate: githubInput => githubInput ? true : 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the name of your repo.',
        validate: repoInput => repoInput ? true : 'Please enter the name of your repo.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your application.',
        validate: descInput => descInput ? true : 'Please enter a description.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information for using your application.',
        validate: usageInput => usageInput ? true : 'Please provide information for using your application.'
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Are there any additional sections you would like to include in your README?',
        choices: [
            { name: 'Deployed Application', checked: false },
            { name: 'Installation', checked: false },
            { name: 'Built With', checked: true },
            { name: 'License', checked: false },
            { name: 'Contributing', checked: false },
            { name: 'Tests', checked: false },
            { name: 'Questions', checked: true },
            { name: 'Credits', checked: true },
        ]
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a link to your deployed application.',
        when: ({ contents }) => contents.includes('Deployed Application'),
        validate: linkInput => linkInput ? true : 'Please enter a link.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List any required packages for installation.',
        when: ({ contents }) => contents.includes('Installation'),
        validate: installInput => installInput ? true : 'Please enter installation instructions!'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide license information.',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
        default: 0,
        when: ({ contents }) => contents.includes('License'),
        validate: licenseInput => licenseInput ? true : 'Please provide license information!'
    },
    {
        type: 'checkbox',
        name: 'built with',
        message: 'Please select the technologies that your application was built with.',
        choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js'],
        default: 0,
        when: ({ contents }) => contents.indexOf('Built With') > -1
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your guidelines for contributing.',
        when: ({ contents }) => contents.indexOf('Contributing') > -1,
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter guidelines for contributing.');
            return false;
          }
        }
      },
      
    //TODO: add tests, contact info, *screenshot, *credit
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
