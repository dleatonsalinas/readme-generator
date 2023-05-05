// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => license ? `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)\n` : '';

//Create table of contents
const createTableOfContents = contentsArr => contentsArr.map(item => `- [${item}](#${item.toLowerCase().replace(/\s+/g, '-')})`).join('\n');


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
