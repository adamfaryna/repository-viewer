'use strict';

describe('repositoryViewer module', function () {
  beforeEach(function () {
    module('repositoryViewer');
  });

  describe('logger service', function () {
    var logger, log;

    beforeEach(inject(function(_logger_, $log) {
      logger = _logger_;
      log = $log;
    }));

    it('should log error message', function () {
      var expected = 'mess';
      logger.err(expected);
      expect(log.error.logs[0][0]).toBe(expected);
    });
  });
});
