'use strict';

angular.module('betweenVisits')
  .directive('bespoke', function () {
    return {
      restrict: 'EA',
      scope: {
			bespokeSlides: '=slides',
		},
      link: function (scope, element) {
		var slides = scope.bespokeSlides;
		if(slides !== undefined){
			angular.forEach(slides, function(slide){
				var section = angular.element("<section>" + slide + "<section>");
				elem.append(section);
			});
			bespoke.from(elem[0], [
				bespoke.plugins.fx(),
				bespoke.plugins.loop(),
				bespoke.plugins.bullets(),
				bespoke.plugins.touch(),
				bespoke.plugins.run(),
				bespoke.plugins.click(),
				bespoke.plugins.fullscreenbackground(),
				bespoke.plugins.mouse(),
				bespoke.plugins.scale()
			]);
		}      
    }
  }
 });
