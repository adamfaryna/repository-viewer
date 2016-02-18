'use strict';

angular.module('repositoryViewer').directive('rvList', ['componentsPath', '$state', function (componentsPath, $state) {
  return {
    restrict: 'E',
    scope: {
      records: '='
    },
    templateUrl: componentsPath + 'list/list.html',
    link: function (scope) {
      scope.goToDetails = function (recordId) {
        $state.go('details', { 'id': recordId });
      };
    }
  };
}]);
