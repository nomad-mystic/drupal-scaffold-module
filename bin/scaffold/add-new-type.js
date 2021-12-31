// Community
const fse = require('fs-extra');
const fs = require('fs');

// Internal
const { getModulesFolderPath } = require('../utils/path-utils');

/**
 * @description This creates a module based on the users inputs
 *
 * @param {object} answers
 * @return void
 */
const addNewType = function(answers) {
  // User inputs
  const machineName = answers.machineName;
  const type = answers.type;
  const className = answers.className;

  // Absolute path of the custom folder
  const customPath = getModulesFolderPath();
  const modulePath = `${customPath}/${machineName}`;

  // Our class path
  const newClassPath = `${modulePath}/src/${type}/${type}.php`;
  const renamedClassFilePath = `${modulePath}/src/${type}/${className}.php`;

  // Copy over class file
  fse.copySync(`./scaffold/add/classes/${type}.php`, newClassPath, {overwrite: false});

  // Rename the class file
  fs.renameSync(newClassPath, renamedClassFilePath);

  // Update their values
  fs.readFile(renamedClassFilePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }

    // Replace the className and the machineName
    let result = data.replace(/MODULE_NAME/g, machineName);
    result = result.replace(/CLASS_NAME/g, className);

    fs.writeFile(renamedClassFilePath, result, 'utf8', function(err) {
      if (err) return console.log(err);
    });
  });

  // Update services YML with new service
  // @todo These are going to be different for each class type

};

module.exports = {
  addNewType,
};
