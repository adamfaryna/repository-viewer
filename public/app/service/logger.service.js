'use strict';

angular.module('repositoryViewer').service('logger', ['$log', function ($log) {
  this.err = function (message) {
    $log.error(message);
  };
}]);
