// Community
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

// Internal
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('../utils/path-utils');
const { renameBaseFiles } = require('./build/rename-base-files');
const { updateModuleFile } = require('./build/update-module-file');
const { updateRootScaffoldFile } = require('./build/update-scaffold-file');

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
    if (fs.existsSync(modulePath)) {
      console.log('There is already a module of that name. Please use another name.');

      process.exit(0);
    }

    // Copy our files over to the modules folder
    fse.copySync(`${path.join(__dirname + '../../../scaffolding')}`, modulePath, {overwrite: false});

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

    // Update the package.json
    updateRootScaffoldFile(
      modulePath,
      machineName,
      moduleDescriptionName,
      'package.json'
    );

    // Update the libraries
    updateRootScaffoldFile(
      modulePath,
      machineName,
      moduleDescriptionName,
      `${machineName}.libraries.yml`
    );

  } catch (err) {

    console.error(err);

  }
};

module.exports = {
  scaffoldModule,
};
