'use strict';

angular.module('betweenVisits')
  .directive('d3', function () {
    return {
      restrict: 'EA',
      link: function (scope, element) {
        element.text('d3 directive');
      }
    };
  });
