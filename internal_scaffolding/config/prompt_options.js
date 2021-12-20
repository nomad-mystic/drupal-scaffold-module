const promptOptions = [
  {
    type: 'input',
    name: 'machineName',
    message: 'What is the machine name of your module?',
  },
  {
    type: 'input',
    name: 'moduleAdminName',
    message: 'What is the admin name of your module?',
  },
  {
    type: 'input',
    name: 'moduleDescriptionName',
    message: 'What is the description of your module?',
    default: '',
  },
];

module.exports = promptOptions;
