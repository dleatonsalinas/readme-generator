// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => license ? `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)\n` : '';

//Create table of contents and sections based on user input
const createTableOfContents = contentsArr => contentsArr.map(item => `- [${item}](#${item.toLowerCase().replace(/\s+/g, '-')})`).join('\n');

const createInstallation = install => install ? `To use this application, please install: \n\`\`\`\n${install}\n\`\`\`` : '';

const createDescription = (title, description, link) => link ? `${description}\n\nView the deployed page at [${title}](${link}).` : `${description}`;

const createBuiltWith = builtWith => builtWith ? builtWith.map(item => `* ${item}`).join('\n') : '';

const createLicense = license => license ? `This application is licensed under the ${license} license.` : '';

const createTest = test => test ? `To run tests on the application, install\n\`\`\`\n${test}\n\`\`\`\nand run \`npm run test\` from the command line.` : '';

const createQuestions = (email, github, repo) => email ? `If you have any questions about the repo, please [open an issue](https://github.com/${github}/${repo}/issues) or contact me via email at ${email}. You can find more of my work on my GitHub, [${github}](https://github.com/${github}/).` : '';

const createCredits = creditItem => creditItem ? creditItem.map(credit => `* [${credit.creditName}](${credit.creditLink})\n`).join('') : '';

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
