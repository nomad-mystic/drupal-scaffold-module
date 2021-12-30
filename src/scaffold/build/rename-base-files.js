// Community
const fs = require('fs');
const glob = require('glob');
const path = require('path');


const ignoredFiles = [
  'drush.services.yml'
];

/**
 * @description Renames the .yml and module file based on user input
 *
 * @param {string} modulePath
 * @param {string} machineName
 * @param {string} fileType
 * @return void
 */
const renameBaseFiles = function(modulePath, machineName, fileType) {
  // Grab our YML files paths
  let files = glob.sync(`${modulePath}/**/*${fileType}`);

  // Sanity check we have a files array
  if (!files || typeof files === 'undefined' || files.length <= 0) {
    console.error(`There was an issue with grabbing our ${fileType} files. Please reach-out to the author of this package.`);
  }

  // For each of the YML files rename them based on user input
  for (let file = 0; file < files.length; file++) {

    // Sanity check
    if (files[file] && typeof files[file] !== 'undefined') {
      let fileName = path.basename(files[file]);
      let afterFirstDot = fileName.match(/\.(.*)/)[0]; // We want [0]

      // Some YML files we don't want to rename
      if (!ignoredFiles.includes(fileName)) {
        // Change the file names
        fs.renameSync(`${modulePath}/${fileName}`, `${modulePath}/${machineName}${afterFirstDot}`);
      }
    }
  }
};

module.exports = {
  renameBaseFiles
};




