'use strict';

angular.module('betweenVisits')
  .directive('impress', function () {
    return {
      restrict: 'EA',
      link: function (scope, element) {
        element.text('impress directive');
      }
    };
  });
