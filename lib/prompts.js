var actions = require('./actions');
var inquirer = require('inquirer');
var licenses = require('./licenses');

function action(opts) {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        name: 'Generate a license',
        value: 'generate'
      },
      {
        name: 'Show a license',
        value: 'show'
      }
    ],
    default: 'generate'
  }, function(response) {
    actions[response.action].apply(null, [opts]);
  });
}

function license(cb) {
  var choices = [];
  Object.keys(licenses).forEach(function(license) {
    choices.push({
      name: licenses[license].fullName,
      value: license
    });
  });

  inquirer.prompt({
    type: 'list',
    name: 'license',
    message: 'Which license?',
    choices: choices,
    default: 'mit'
  }, function(response) {
    cb(response.license);
  });
}

function user(cb) {
  inquirer.prompt({
    type: 'input',
    name: 'user',
    message: 'Replace the `user` placeholder with:'
  }, function(response) {
    cb(response.user);
  });
}

function year(cb) {
  inquirer.prompt({
    type: 'input',
    name: 'year',
    message: 'Replace the `year` placeholder with:',
    default: new Date().getFullYear()
  }, function(response) {
    cb(response.year);
  });
}

exports.action = action;
exports.license = license;
exports.user = user;
exports.year = year;
