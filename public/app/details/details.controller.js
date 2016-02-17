'use strict';

angular.module('repositoryViewer').controller('DetailsCtrl', ['$scope', '$stateParams', 'restService', function ($scope, $stateParams, restService) {

  restService.getData().then(function (data) {
    for (var i in data) {
      if (data[i].id === +$stateParams.id) {
        $scope.data = data[i];
        break;
      }
    }
  });
}]);
