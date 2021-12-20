// https://www.npmjs.com/package/inquirer
// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/pizza.js
const inquirer = require('inquirer');

// Internal
const promptOptions = require('./config/prompt_options');

inquirer
  .prompt(promptOptions)
  .then((answers) => {

    console.log(answers);

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
