'use strict';

describe('repositoryViewer module', function () {
  beforeEach(function() {
    module('templatesHtml');
    module('repositoryViewer');
  });

  describe('numberSpan directive', function () {
    var $compile, $rootScope, element;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $rootScope.value = 'val';
      $rootScope.type = 'stars';

      element = $compile('<rv-number-span type="{{type}}" value="{{value}}"></rv-number-span>')($rootScope);
      $rootScope.$digest();
    }));

    it('should generate span element', function (){
      expect(element.find('span').length).toBe(1);
    });

    it('should generate span element with passed class', function (){
      expect(element.find('span').hasClass('stars')).toBeTruthy();
    });

    it('should generate span element with passed value as html', function (){
      expect(element.find('span').html()).toBe($rootScope.value);
    });
  });
});
