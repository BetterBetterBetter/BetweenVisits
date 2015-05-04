'use strict';

angular.module('betweenVisits')
  .directive('navBar', function () {
    return {
      restrict: 'A',
      templateUrl: 'directives/nav-bar/nav-bar.html'
    };
  });
