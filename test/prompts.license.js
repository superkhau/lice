var licenses = require('./fixtures/licenses');
var val = require('../lib/validator');

describe('val', function() {
  describe('.license(name)', function() {
    it('should return false when name is an invalid data type', function() {
      var invalidDataTypes = [null, [], 0];
      invalidDataTypes.forEach(function(dataType) {
        expect(val.license(dataType, licenses)).to.not.be.ok;
      });
    });

    it('should return true when name is a valid data type', function() {
      expect(val.license('mit', licenses)).to.be.ok;
    });

    it('should return false when the license name does not exist', function() {
      expect(val.license('asdf', licenses)).to.not.be.ok;
    });

    it('should return true when the license name exists', function() {
      expect(val.license('mit', licenses)).to.be.ok;
    });
  });
});
