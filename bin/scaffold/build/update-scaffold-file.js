const fs = require('fs');

/**
 * @description
 *
 * @param {string} modulePath
 * @param {string} moduleAdminName
 * @param {string} moduleDescriptionName
 * @param {string} fileName
 */
const updateRootScaffoldFile = (modulePath, moduleAdminName, moduleDescriptionName, fileName) => {
  let updatedContent = '';

  // Get our file in memory
  let fileContents = fs.readFileSync(`${modulePath}/${fileName}`, 'utf8');

  // Replace our file with user input values
  updatedContent = fileContents.replace(/MODULE_NAME/gm, moduleAdminName);
  updatedContent = updatedContent.replace(/MODULE_DESCRIPTION/gm, moduleDescriptionName);

  // Write our updated values
  fs.writeFileSync(`${modulePath}/${fileName}`, updatedContent);
};

module.exports = {
  updateRootScaffoldFile,
};
