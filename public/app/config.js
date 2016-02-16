'use strict';

angular.module('repositoryViewer').config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/listing');

  $stateProvider
    .state('listing', {
      url: '/listing',
      templateUrl: 'app/listing/listing.html',
      controller: 'ListingCtrl'
    })
    .state('details', {
      url: '/details:id',
      templateUrl: 'app/details/details.html',
      controller: 'DetailsCtrl'
    });

  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);
