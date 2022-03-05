// TODO: Include packages needed for this application
const inquirer = require('inquirer')
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
        name: 'contributing',
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
        name: 'tests',
        message: 'Provide test instructions for the project',
        validate: projectTestsInput => {
            if (projectTestsInput) {
              return true;
            } else {
              console.log('Please enter the project test instructions!');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project.',
        validate: projectLinkInput => {
            if (projectLinkInput) {
              return true;
            } else {
              console.log('Please enter the project link!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address so users can reach if they have questions. (Required)',
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
function writeToFile(fileName, data) {}

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
    promptUser(questions).then(answers =>{
        console.log(answers)
    });
}

// Function call to initialize app
init();
