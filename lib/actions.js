var async = require('async');
var fs = require('fs');
var licenses = require('./licenses');
var path = require('path');
var promptFor = require('./prompts');
var isValid = require('./validator');

function help() {
  var filePath = path.resolve(__dirname, '../data/help.txt');
  var contents = fs.readFileSync(filePath, 'utf8');
  console.log(contents);
}

function generate(opts) {
  function generateLicense(opts) {
    var source = path.resolve(__dirname, '../licenses', opts.license + '.txt');
    var target = path.resolve(opts.path, opts.filename);
    var contents = fs.readFileSync(source, 'utf8');
    var license = licenses[opts.license];

    if (license.placeholders.description) {
      var descriptionRegExp = new RegExp(license.placeholders.description);
      contents = contents.replace(descriptionRegExp, opts.description);
    }
    if (license.placeholders.year) {
      var yearRegExp = new RegExp(license.placeholders.year);
      contents = contents.replace(yearRegExp, opts.year);
    }
    if (license.placeholders.user) {
      var userRegExp = new RegExp(license.placeholders.user);
      contents = contents.replace(userRegExp, opts.user);
    }

    fs.writeFileSync(target, contents);
  }

  if (opts.license && isValid.license(opts.license) && opts.noprompt)
    return generateLicense(opts);
  else if (opts.license && !isValid.license(opts.license))
    console.log('! Invalid license:', opts.license);

  async.waterfall([
    function(cb) {
      promptFor.license(function(license) {
        opts.license = license;
        cb();
      });
    },
    function(cb) {
      var placeholder = licenses[opts.license].placeholders.description;
      if (placeholder === '')
        return cb();

      promptFor.description(placeholder, function(description) {
        opts.description = description;
        cb();
      });
    },
    function(cb) {
      var placeholder = licenses[opts.license].placeholders.user;
      if (placeholder === '')
        return cb();

      promptFor.user(placeholder, function(user) {
        opts.user = user;
        cb();
      });
    },
    function(cb) {
      var placeholder = licenses[opts.license].placeholders.year;
      if (placeholder === '')
        return cb();

      promptFor.year(placeholder, function(year) {
        opts.year = year;
        cb();
      });
    }
  ], function(err) {
    if (err) throw err;

    generateLicense(opts);

    console.log('!', opts.license.toUpperCase(), 'license generated in',
        opts.path);
  });
}

function show(opts) {
  function showLicense(license) {
    var fileName = license.toLowerCase() + '.txt';
    var filePath = path.resolve(__dirname, '../licenses', fileName);
    var contents = fs.readFileSync(filePath, 'utf8');
    process.stdout.write(contents);
  }

  if (opts.license && isValid.license(opts.license) && opts.noprompt)
    return showLicense(opts.license);
  else if (opts.license && !isValid.license(opts.license))
    console.log('! Invalid license:', opts.license);

  promptFor.license(function(license) {
    showLicense(license);
  });
}

function version() {
  var version = require('../package.json').version
  console.log(version);
}

exports.help = help;
exports.generate = generate;
exports.show = show;
exports.version = version;
