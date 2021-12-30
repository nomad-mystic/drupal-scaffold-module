// Internal
const { getModulesFolderPath } = require("../utils/path-utils");

/**
 * @description This creates a module based on the users inputs
 *
 * @param {object} answers
 * @return void
 */
const addNewType = function(answers) {
  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();

  // User inputs
  const machineName = answers.machineName;
  const type = answers.type;

  console.log(answers);

};

module.exports = {
  addNewType,
};
