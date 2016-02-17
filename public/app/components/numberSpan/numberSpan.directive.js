'use strict';

angular.module('repositoryViewer').directive('rvNumberSpan', [function () {
  return {
    restrict: 'E',
    scope: {
      value: '@',
      type: '@'
    },
    template: '<span class="{{type}}">{{value}}</span>'
  };
}]);
