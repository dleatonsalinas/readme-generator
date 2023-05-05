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
        validate: nameInput => nameInput ? true : (console.log('Please provide a project title.'), false)
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
        validate: githubInput => githubInput ? true : (console.log('Please enter your GitHub username.'), false)
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the name of your repo.',
        validate: repoInput => repoInput ? true : (console.log('Please enter the name of your repo.'), false)
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your application.',
        validate: descInput => descInput ? true : (console.log('Please enter a description.'), false)
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information for using your application.',
        validate: usageInput => usageInput ? true : (console.log('Please provide information for using your application.'), false)
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Any additional sections you would like to include in your README?',
        choices: [
            { name: 'Deployed Application', checked: false },
            { name: 'Installation', checked: false },
            { name: 'Screenshots', checked: true },
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
        when: ({ contents }) => contents.indexOf('Deployed Application') > -1,
        validate: linkInput => linkInput ? true : (console.log('Please enter a link.'), false)
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list any required packages for installation of your application.',
        when: ({ contents }) => contents.indexOf('Installation') > -1,
        validate: installInput => installInput ? true : (console.log('Please enter installation instructions!'), false)
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information.',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'], default: 0,
        when: ({ contents }) => contents.indexOf('License') > -1,
        validate: licenseInput => licenseInput ? true : (console.log('Please provide license information!'), false)
    },
    {
        type: 'checkbox',
        name: 'built with',
        message: 'Please select the technologies that your application was built with.',
        choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js'], default: 0,
        when: ({ contents }) => contents.indexOf('Built With') > -1
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your guidelines for contributing.',
        when: ({ contents }) => contents.indexOf('Contributing') > -1,
        validate: contributingInput => contributingInput ? true : (console.log('Please enter guidelines for contributing.'), false)
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test information for your application.',
        when: ({ contents }) => contents.includes('Tests'),
        validate: testsInput => testsInput ? true : (console.log('What packages are required to run tests for your application?'), false)
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide an e-mail address for others to reach you with questions.',
        when: ({ contents }) => contents.includes('Questions'),
        validate: questionsInput => questionsInput ? true : (console.log('Please provide an e-mail address.'), false)
    }

    //TODO: add credit
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
