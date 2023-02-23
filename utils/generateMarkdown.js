// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
  }
  return badges[license]
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Project Description 
  ${data.projectDescription}
  ## Table of contents
    -[Installation] (#Installation)
    -[Usage] (#Usage)
    -[Licence] (#Licence)
    -[Contributors] {#Contributors}
    -Testing (#Testing)
    -[Contact Details] (#Contact Details)
  ## Installation
  ${data.install}
  ## Usage 
  ${data.usage}
  ## Licence
  The licence chosen was ${data.license}  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributors
  In this project there developers can contribute by ${data.contributing} 
  ## Testing
  The testing that will be done by ${data.testing}
  ## Contact Details
  My Github profile [${data.gitHubName}](https://github.com/${data.gitHubName})
  My email is: ${data.email}
`;
}
module.exports = generateMarkdown;
