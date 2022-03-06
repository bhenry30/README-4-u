// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
            if (projectNameInput) {
              return true;
            } else {
              console.log('Please enter the project name!');
              return false;
            }
        }
    },    
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: projectDescInput => {
            if (projectDescInput) {
              return true;
            } else {
              console.log('Please enter the project description!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for the project',
        validate: projectInstInput => {
            if (projectInstInput) {
              return true;
            } else {
              console.log('Please enter the project installation instructions!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for the project',
        validate: projectUsageInput => {
            if (projectUsageInput) {
              return true;
            } else {
              console.log('Please enter the project usage information!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for the project',
        validate: projectContInput => {
            if (projectContInput) {
              return true;
            } else {
              console.log('Please enter the project contribution guidelines!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for the project',
        validate: projectTestInput => {
            if (projectTestInput) {
              return true;
            } else {
              console.log('Please enter the project test instructions!');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use for your app?',
        choices: ['Apache License 2.0', 'GNU General Public License', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
        validate: projectUsernameInput => {
            if (projectUsernameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub Username!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address so users can reach you if they have questions.',
        validate: projectEmailInput => {
            if (projectEmailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, (err) => {
        if (err) {
        reject(err);
        return;
        }
        resolve({
        ok: true,    
        message: 'Your README file has been created!'
        })
    })
})
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
        =================================
        Fill out the following questions:
        =================================
        `);
    

    const promptUser = questions => {
        return inquirer.prompt(questions)
    }
    promptUser(questions)
    .then(answers => {
        console.log(answers)
        return answers
    })
    .then(templateData => {
        return generateMarkdown(templateData)
    })
    .then(template => {
        return writeToFile(template)
    })
    .then(message => {
        console.log(message.message)
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
