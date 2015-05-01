'use strict';

angular.module('betweenVisits')
  .controller('InformationCtrl', function ($timeout) {

    var vm = this;

    $timeout(function(){
    	angular.element(document.getElementById('impresshook')).scope().$emit('initImpress');
    	resizeDiv();
	},1);


resizeDiv();


function resizeDiv() 
{//height == x axis, width == y axis


	var $view = $(' #impresshook ');
	var $slides = $(' .slide ');
      var vpw = $(window).width();
      var vph = $(window).height();
      var asp = ( vph / vpw );
      var area = ( vph * vpw );
      var slideH = vph * 1.333;
      var slideW = vpw * 1.333;
	  $( $slides )
      	.css("height", slideH)
      	.css("width", slideW);

}

resizeDiv();

window.onresize = function(event) {
resizeDiv();
};

window.addEventListener('resize', resizeDiv);

imagesLoaded("body", resizeDiv());

    angular.extend(vm, {
      name: 'InformationCtrl'
    });

  });
