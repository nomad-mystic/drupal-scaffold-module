// Community
const fse = require('fs-extra');
const yaml = require('js-yaml');

// Internal
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('../utils/path-utils');
const { renameBaseFiles } = require('../utils/rename-base-files');
const {updateModuleFile} = require("../utils/update-module-file");

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
    fse.copySync('./scaffolding', modulePath, {overwrite: false});

    // Rename the YML and module file based on user input
    renameBaseFiles(modulePath, machineName, '.yml');
    renameBaseFiles(modulePath, machineName, '.module');

    updateModuleFile(modulePath, {
      machineName,
      moduleAdminName,
      moduleDescriptionName,
    });

  } catch (err) {

    console.error(err)

  }
};

module.exports = {
  scaffoldModule,
};
