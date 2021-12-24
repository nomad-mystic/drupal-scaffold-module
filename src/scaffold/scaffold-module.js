// Community
const fs = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const path = require('path');

// Internal
const { whereAmI, isDrupalInstall, getModulesFolderPath } = require('../utils/path-utils');

const scaffoldModule = function(answers) {
  // console.log(answers);

  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();

  // User inputs
  const machineName = answers.machineName;
  const moduleAdminName = answers.moduleAdminName;
  const moduleDescriptionName = answers.moduleDescriptionName;

  const modulePath = `${customPath}/${machineName}`;

  // Copy our files over to the modules folder
  fse.copySync('./scaffolding', modulePath, {});

  // Grab our YML files paths
  glob(`${customPath}/${machineName}/**/*.yml`, {}, function (err, files) {
    // Check for errors first
    if (err) {
      throw err;
    }

    // Sanity check we have a files array
    if (!files || typeof files === 'undefined' || files.length <= 0) {
      console.error('There was an issue with grabbing our YML files. Please reach-out to the author of this package.');
    }

    // For each of the YML files rename them based on user input
    for (let file = 0; file < files.length; file++) {

      // Sanity check
      if (files[file] && typeof files[file] !== 'undefined') {
        let fileName = path.basename(files[file]);
        let afterFirstDot = fileName.match(/\.(.*)/)[0]; // We want [0]

        // Change the file names
        fs.renameSync(`${modulePath}/${fileName}`, `${modulePath}/${machineName}${afterFirstDot}`);
      }
    }
  });
};

module.exports = {
  scaffoldModule,
};
