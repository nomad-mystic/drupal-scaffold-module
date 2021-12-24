// https://www.npmjs.com/package/inquirer
// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/pizza.js
const inquirer = require('inquirer');

// Get our prompts
const promptOptions = require('./config/prompt-options');

// Internal functions
const { scaffoldModule } = require('./scaffold/scaffold-module');
const { whereAmI, isDrupalInstall } = require('./utils/path-utils');

if (!isDrupalInstall()) {

  console.log('Your path is not at the root of your Drupal install')
  console.log(`You are located at ${whereAmI()}`);
  console.log('Please move to the root Drupal install folder');

}
//
//
// // Starting point for scaffolding a module
// inquirer
// .prompt(promptOptions)
// .then((answers) => {
//
//   scaffoldModule(answers);
//
// })
// .catch((error) => {
//   if (error.isTtyError) {
//
//     console.error('Prompt couldn\'t be rendered in the current environment');
//
//   } else {
//     console.log('Something else went wrong');
//
//     console.error(error);
//   }
// });
