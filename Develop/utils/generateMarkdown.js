// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = templateData => {
  const { name, description, installation, usage, contribution, test, license, username, email } = templateData;

  return `
  # ${name}

 **Table of Contents**

 1. [Description](#description)
 2. [Installation Instructions](#installation-instructions)
 3. [Usage Information](#usage-information)
 4. [Contribution Guidelines](#contribution-guidelines)
 5. [Test Instructions](#test-instructions)
 6. [License](#license)
 7. [Questions](#questions)
  
  <a name="description"></a>
  ## Description 
  ${description}

  <a name="installation-instructions"></a>
  ## Installation Instructions
  ${installation}

  <a name="usage-information"></a>
  ## Usage Information
  ${usage}

  <a name="contribution-guidelines"></a>
  ## Contribution Guidelines
  ${contribution}

  <a name="test-instructions"></a>
  ## Test Instructions
  ${test}

  <a name="license"></a>
  ## License
  ${license}

  <a name="questions"></a>
  ## Questions <a name="questions"></a>
  GitHub profile: https://github.com/${username} </br>
  Contact me here if you have any questions: ${email}
`;
}

module.exports = generateMarkdown;
