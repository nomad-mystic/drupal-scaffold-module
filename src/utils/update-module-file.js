const fs = require("fs");
const yaml = require('js-yaml');

/**
 * @description Updates the module file with user inputs
 *
 * @param {string} modulePath
 * @param {object} userValues
 * @return void
 */
const updateModuleFile = function(modulePath, userValues) {

  // User inputs
  const machineName = userValues.machineName;
  const moduleAdminName = userValues.moduleAdminName;
  const moduleDescriptionName = userValues.moduleDescriptionName;

  // Get our YML info file
  let fileContents = fs.readFileSync(`${modulePath}/${machineName}.info.yml`);
  let moduleFile = yaml.load(fileContents);

  // Update our values based on user input
  let updateInfoFile = moduleFile;
  updateInfoFile.name = `${moduleAdminName}`;
  updateInfoFile.description = `${moduleDescriptionName}`;

  // Write our updated values to the info file
  fs.writeFileSync(`${modulePath}/${machineName}.info.yml`, yaml.dump(updateInfoFile));
};

module.exports = {
  updateModuleFile,
};
