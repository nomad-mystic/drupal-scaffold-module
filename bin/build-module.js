#! /usr/bin/env node

// Community
require('dotenv').config();

const inquirer = require('inquirer');
const colors = require('colors');

// Get our prompts
const buildOptions = require('./config/build-options');

// Internal
const { scaffoldModule } = require('./scaffold/scaffold-module');
const {
  whereAmI,
  isDrupalInstall,
  getModulesFolderPath
} = require('./utils/path-utils');

// Enable debug mode?
const isDebugMode = !!process.env?.DEBUG;

// Let the user know they need to be in the root of the project
if (!isDrupalInstall() && !isDebugMode) {

  console.log(colors.yellow('Your path is not at the root of your Drupal install.'))
  console.log(colors.yellow(`You are located at ${whereAmI()}`));
  console.log(colors.yellow('Please move to the root Drupal install folder.'));

  process.exit();
}

// Starting point for scaffolding a module
inquirer
.prompt(buildOptions)
.then((answers) => {
  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();

  // Build the module
  scaffoldModule(answers);

  // Let the user know it has been created
  console.log("\n");
  console.log(colors.green(`Your ${answers.machineName} module has been scaffold.`));
  console.log(colors.yellow(`Check: ${customPath}/${answers.machineName}`));
})
.catch((error) => {
  if (error.isTtyError) {

    console.error('Prompt couldn\'t be rendered in the current environment.');

  } else {
    console.log(colors.red('Something else went wrong!'));

    console.error(error);
  }
});
