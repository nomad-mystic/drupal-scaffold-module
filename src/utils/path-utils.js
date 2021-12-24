const fs = require('fs-extra');
const path = require('path');

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

  return fs.pathExistsSync(__dirname + '/web/core/lib/Drupal.php');

};

module.exports = {
  whereAmI,
  isDrupalInstall
};
