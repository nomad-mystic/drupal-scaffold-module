// Community
const fse = require('fs-extra');
const path = require('path');

// Internal
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('../utils/path-utils');
const { renameBaseFiles } = require('./build/rename-base-files');
const {updateModuleFile} = require("./build/update-module-file");

/**
 * @description This creates a module based on the users inputs
 *
 * @param {object} answers
 * @return void
 */
const scaffoldModule = function(answers) {
  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();

  // User inputs
  const machineName = answers.machineName;
  const moduleAdminName = answers.moduleAdminName;
  const moduleDescriptionName = answers.moduleDescriptionName;

  const modulePath = `${customPath}/${machineName}`;

  try {
    // Copy our files over to the modules folder
    // @todo We need to let the user know they have already copied over the files if they use the same name
    // @todo We need to update this path for development
    fse.copySync(`${path.join(__dirname + '../../scaffolding')}`, modulePath, {overwrite: false});

    // Rename the YML and install file based on user input
    renameBaseFiles(modulePath, machineName, '.yml');
    renameBaseFiles(modulePath, machineName, '.install');

    // Update our .module file
    renameBaseFiles(modulePath, machineName, '.module');
    updateModuleFile(modulePath, {
      machineName,
      moduleAdminName,
      moduleDescriptionName,
    });

  } catch (err) {

    console.error(err);

  }
};

module.exports = {
  scaffoldModule,
};
