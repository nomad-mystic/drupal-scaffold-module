// Community

const fse = require('fs-extra');

// Internal
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('../utils/path-utils');
const { renameBaseFiles } = require('../utils/rename-base-files');

const scaffoldModule = function(answers) {
  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();

  // User inputs
  const machineName = answers.machineName;
  const moduleAdminName = answers.moduleAdminName;
  const moduleDescriptionName = answers.moduleDescriptionName;

  const modulePath = `${customPath}/${machineName}`;

  // Copy our files over to the modules folder
  fse.copySync('./scaffolding', modulePath, {});


  // Rename the YML and module file based on user input
  renameBaseFiles(modulePath, machineName, '.yml');
  renameBaseFiles(modulePath, machineName, '.module');
};

module.exports = {
  scaffoldModule,
};
