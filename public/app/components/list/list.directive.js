'use strict';

angular.module('repositoryViewer').directive('rvList', ['componentsPath', function (componentsPath) {
  return {
    restrict: 'E',
    scope: {
      records: '='
    },
    templateUrl: componentsPath + 'list/list.html',
    link: function (scope) {
      //scope.records = [];

    }
  };
}]);
