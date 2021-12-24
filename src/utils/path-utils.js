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

/**
 * @description
 *
 * @return string
 */
const getModulesFolderPath = function() {
  const whereAmI = path.resolve(__dirname);

  // return path.resolve(`${whereAmI}/web/modules/custom/`);
  // @todo Remove after debugging
  return path.resolve(`/Users/keith/Sites/com.drupal-test-project/web/modules/custom`);
};

module.exports = {
  whereAmI,
  isDrupalInstall,
  getModulesFolderPath,
};
