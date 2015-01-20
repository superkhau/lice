var licenses = require('./licenses');

function license(name) {
  return (typeof name === 'string')
    && Object.keys(licenses).indexOf(name.toLowerCase()) !== -1;
}

exports.license = license;
