// Community
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

// Internal
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('../utils/path-utils');
const { renameBaseFiles } = require('./build/rename-base-files');
const { updateInfoFile } = require('./build/update-info-file');
const { updateRootScaffoldFile } = require('./build/update-scaffold-file');
const { addWebpackFiles } = require('./build/add-webpack-files');

/**
 * @description This creates a module based on the users inputs
 *
 * @param {Object} answers
 * @param {string} answers.machineName
 * @param {string} answers.moduleAdminName
 * @param {string} answers.moduleDescriptionName
 * @param {boolean} answers.addWebpack
 *
 * @return void
 */
const scaffoldModule = function(answers) {
  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();

  // User inputs
  const machineName = answers.machineName.trim();
  const moduleAdminName = answers.moduleAdminName.trim();
  const moduleDescriptionName = answers.moduleDescriptionName.trim();
  const addWebpack = answers.addWebpack;

  const modulePath = `${customPath}/${machineName}`;

  try {
    if (fs.existsSync(modulePath)) {
      console.log('There is already a module with that name. Please use another name.');

      process.exit(0);
    }

    // Copy our files over to the modules folder
    fse.copySync(`${path.join(__dirname + '../../../scaffolding')}`, modulePath, {overwrite: false});

    // Rename the YML, install, and module file based on user input
    renameBaseFiles(modulePath, machineName, '.yml');
    renameBaseFiles(modulePath, machineName, '.install');
    renameBaseFiles(modulePath, machineName, '.module');

    // @todo Keith Abstract this out for other YMl files
    updateInfoFile(modulePath, {
      machineName,
      moduleAdminName,
      moduleDescriptionName,
    });

    if (addWebpack) {

      addWebpackFiles(modulePath);

    }

    // Living list of files to update
    let filesToUpdate = [
      `${machineName}.module`,
    ];

    // If the user wants the Webpack files add them here to be updated
    if (addWebpack) {
      filesToUpdate.push('package.json');
      filesToUpdate.push('webpack.config.js');
    }

    for (let file = 0; file < filesToUpdate.length; file++) {
      if (filesToUpdate[file] && typeof filesToUpdate[file] !== 'undefined') {
        // Update the file with users data
        updateRootScaffoldFile(
          modulePath,
          filesToUpdate[file],
          {
            machineName,
            moduleAdminName,
            moduleDescriptionName,
          }
        );
      }
    }
  } catch (err) {

    console.error(err);

  }
};

module.exports = {
  scaffoldModule,
};
