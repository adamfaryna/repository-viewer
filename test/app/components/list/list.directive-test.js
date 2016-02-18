'use strict';

describe('repositoryViewer module', function () {
  beforeEach(function () {
    module('templatesHtml');
    module('repositoryViewer');
  });

  describe('list directive', function () {
    var $compile, $rootScope, element;
    var data = [
      {
        "id": 1,
        "caption": "monket-google-calendar",
        "details": "Simplified UI for Google Calendar",
        "modified": "2016-02-16T21:11:23.406Z",
        "stars": 15,
        "views": 5,
        "forks": 5
      },
      {
        "id": 2,
        "caption": "loris",
        "details": "Just loris",
        "modified": "2016-02-16T21:11:23.406Z",
        "stars": 9,
        "views": 3,
        "forks": 1
      },
      {
        "id": 3,
        "caption": "monket-calendar",
        "details": "Just monket-calendar",
        "modified": "2016-02-16T21:11:23.406Z",
        "stars": 4,
        "views": 2,
        "forks": 1
      }
    ];

    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $rootScope.records = data;
      element = $compile('<rv-list records="records"></rv-list>')($rootScope);
      $rootScope.$digest();
    }));

    it('should create record element for all passed records', function () {
      expect(element.find('.record').length).toBe(data.length);
    });

    it('should create record with link', function () {
      expect(element.find('.record:first-child a').length).toBe(1);
    });

    it('should create record with three rv-number-span elements', function () {
      expect(element.find('.record:first-child rv-number-span').length).toBe(3);
    });
  });
});

