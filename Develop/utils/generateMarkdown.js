// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } else if (license = 'Apache License 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license = 'GNU General Public License'){
    return 'https://opensource.org/licenses/gpl-license'
  } else if (license = 'Mozilla Public License 2.0'){
      return 'https://opensource.org/licenses/MPL-2.0'  
  
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license = 'Apache License 2.0'){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license = 'GNU General Public License'){
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license = 'Mozilla Public License 2.0'){
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'  
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // const { license } = license
  if (!license) {
    return ''
  }
  return `
  <a name="license"></a>
  ## License
  ${renderLicenseLink(license)} [${license}](${renderLicenseLink(license)})
  `
}

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

  ${renderLicenseSection(license)}

  <a name="questions"></a>
  ## Questions <a name="questions"></a>
  - GitHub profile: https://github.com/${username}
  - Contact me here if you have any questions: ${email}
`;
}

module.exports = generateMarkdown;
