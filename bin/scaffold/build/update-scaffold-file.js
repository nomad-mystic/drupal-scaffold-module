// Community
const fs = require('fs');

/**
 * @description This will update the content of a newly scaffold file with users inputs
 *
 * @param {string} modulePath
 * @param {string} machineName
 * @param {string} moduleDescriptionName
 * @param {string} fileName
 * @return void
 */
const updateRootScaffoldFile = (modulePath, machineName, moduleDescriptionName, fileName) => {
  let updatedContent = '';

  // Get our file in memory
  let fileContents = fs.readFileSync(`${modulePath}/${fileName}`, 'utf8');

  // Replace our file with user input values
  updatedContent = fileContents.replace(/MODULE_NAME/gm, machineName);
  updatedContent = updatedContent.replace(/MODULE_DESCRIPTION/gm, moduleDescriptionName);

  // Write our updated values
  fs.writeFileSync(`${modulePath}/${fileName}`, updatedContent);
};

module.exports = {
  updateRootScaffoldFile,
};
