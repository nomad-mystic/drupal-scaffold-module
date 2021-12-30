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
    choices: ['Command', 'Controller', 'Event Subscriber', 'Form', 'Plugin', 'Twig Extension'],
  },
];

module.exports = addOptions;
