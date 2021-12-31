const fs = require('fs-extra');
const path = require('path');
const fuzzy = require('fuzzy');
const {readdirSync} = require("fs");
const { random } = require('lodash');

/**
 * @description Gets the current path
 *
 * @return string
 */
const whereAmI = function() {

  return path.resolve(__dirname);

};

/**
 * @description  Check if the users is the root of the project or another folder
 *
 * @return bool
 */
const isDrupalInstall = function() {

  return fs.pathExistsSync('./web/core/lib/Drupal.php');

};

/**
 * @description
 *
 * @return string
 */
const getModulesFolderPath = function() {

  return path.resolve(`./web/modules/custom/`);

};

/**
 * @description Get all folder names in the custom directory
 *
 * @return array
 */
const getModuleFolderNames = function() {
  // Custom path
  const customPath = getModulesFolderPath();

  // Just get the top level folder names
  const getDirectories = readdirSync(customPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return getDirectories;
};

/**
 * @description Search the custom folder for module names
 *
 * @param {string} answersSoFar
 * @param {string} input
 * @return {Promise<unknown>}
 */
const searchFolderNames = function(answersSoFar, input) {
  const moduleNames = getModuleFolderNames();

  input = input || '';

  // Use fuzzy logic to based on the custom folders names and return for usage in adding to our module
  return new Promise(function (resolve) {
    setTimeout(function () {
      let fuzzyResult = fuzzy.filter(input, moduleNames);

      resolve(
        fuzzyResult.map(function (el) {
          return el.original;
        })
      );
    }, random(30, 500));
  });
}

module.exports = {
  whereAmI,
  isDrupalInstall,
  getModulesFolderPath,
  getModuleFolderNames,
  searchFolderNames,
};
