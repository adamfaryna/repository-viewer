'use strict';

describe('repositoryViewer module', function () {
  beforeEach(function () {
    module('repositoryViewer');
  });

  describe('rest service', function () {
    var $httpBackend, restService;

    beforeEach(inject(function(_$httpBackend_, _restService_) {
      $httpBackend = _$httpBackend_;
      restService = _restService_;
    }));

    it('should get JSON data from server', function () {
      $httpBackend.when('GET', 'data.json').respond({"data": true});

      restService.getData().then(function (data) {
        expect(data.data).toBeTruthy();
      }, function (err) {
        expect(err).toBeUndefined();
      });

      $httpBackend.flush();
    });
  });
});
