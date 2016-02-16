'use strict';

angular.module('repositoryViewer').controller('ListingCtrl', ['$scope', 'restService', function ($scope, restService) {
  restService.getData().then(function (data) {
    $scope.records = data;
  });
}]);
