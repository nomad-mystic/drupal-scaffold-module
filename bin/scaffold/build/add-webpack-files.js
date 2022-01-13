const fse = require("fs-extra");
const path = require('path');

/**
 * @description Based on user inputs scaffold a Webpack build system
 *
 * @param {string} modulePath
 */
const addWebpackFiles = (modulePath) => {

  // Copy over the front-end files
  fse.copySync(path.resolve(`${__dirname}` + '../../../../front-end-scaffolding/'), modulePath, {overwrite: false});

};

module.exports = {
  addWebpackFiles,
};
