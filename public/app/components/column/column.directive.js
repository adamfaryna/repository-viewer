'use strict';

angular.module('repositoryViewer').directive('rvColumn', [function () {
  return {
    restrict: 'E',
    require: '^list',
    scope: {
      value: '@',
      type: '@'
    },
    template: '<span class="{{type}}">{{value}}</span>'
  };
}]);
