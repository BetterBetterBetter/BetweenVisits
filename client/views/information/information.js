'use strict';

angular.module('betweenVisits')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/information', {
        templateUrl: 'views/information/information.html',
        controller: 'InformationCtrl',
        controllerAs: 'vm'
      });
  });
