// https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

// Get our configs
const addOptions = require('./config/add-options');
const globalConfig = require('./config/global-config');

// Internal
const { addNewType } = require('./scaffold/add-new-type');
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('./utils/path-utils');

// Let the user know they need to be in the root of the project
if (!isDrupalInstall() && !globalConfig.debug) {

  console.log('Your path is not at the root of your Drupal install')
  console.log(`You are located at ${whereAmI()}`);
  console.log('Please move to the root Drupal install folder');

}

// Starting point for scaffolding a module
inquirer
.prompt(addOptions)
.then((answers) => {
  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();


  addNewType(answers);

  // Let the user know it has been created
  console.log("\n");
  console.log(`Your ${answers.machineName} module has been scaffold.`);
  console.log(`Check: ${customPath}/${answers.machineName}`);
})
.catch((error) => {
  if (error.isTtyError) {

    console.error('Prompt couldn\'t be rendered in the current environment.');

  } else {
    console.log('Something else went wrong!');

    console.error(error);
  }
});
