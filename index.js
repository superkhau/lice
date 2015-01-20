#!/usr/bin/env node

var actions = require('./lib/actions');
var inquirer = require('inquirer');
var promptFor = require('./lib/prompts');

var args = require('minimist')(process.argv.slice(2), {
  alias: {
    h: 'help',
    g: 'generate',
    f: ['file', 'filename', 'file-name'],
    l: 'license',
    n: ['noprompt', 'no-prompt'],
    p: 'path',
    s: 'show',
    v: 'version',
    u: ['user', 'username', 'user-name'],
    y: 'year'
  },
  default: {
    license: 'mit',
    filename: 'LICENSE',
    noprompt: true,
    path: process.cwd(),
    year: new Date().getFullYear()
  },
  boolean: [
    'generate',
    'noprompt',
    'show'
  ],
  string: [
    'license',
    'name',
    'path'
  ]
});

if (args.help)
  return actions.help();

if (args.version)
  return actions.version();

if (args.show && args.generate) {
  actions.show(args);
  return actions.generate(args);
}

if (args.show)
  return actions.show(args);

if (args.generate)
  return actions.generate(args);

// no action flag provided
args.noprompt = false;
promptFor.action(args);
