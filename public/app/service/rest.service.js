'use strict';

angular.module('repositoryViewer').service('restService', ['$http', '$q', 'logger', function($http, $q, logger) {
  this.getData = function () {
    var deffer = $q.defer();

    $http.get('data.json', { cache: true })
      .then(function (response) {
        deffer.resolve(response.data);

      }, function (response) {
        logger.err(JSON.stringify(response));
        deffer.reject(response);
      });

    return deffer.promise;
  };
}]);
