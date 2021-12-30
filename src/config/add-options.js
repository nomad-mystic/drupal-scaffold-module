const { searchFolderNames } = require('../utils/path-utils');

const addOptions = [
  {
    type: 'autocomplete',
    name: 'machineName',
    message: 'What is the machine name of your module?',
    default: '',
    source: function(answersSoFar, input) {

      return searchFolderNames(answersSoFar, input);

    },
    pageSize: 10,
  },
  {
    type: 'list',
    name: 'type',
    message: 'What type of Drupal src file type would like to add?',
    default: '',
    choices: ['Commands', 'Controller', 'EventSubscriber', 'Form', 'Plugin', 'TwigExtension'],
  },
  {
    type: 'input',
    name: 'className',
    message: 'What name would you like to give to the new class?',
    default: 'ClassName',
  },
];

module.exports = addOptions;
