'use strict';

angular.module('betweenVisits')
  .controller('HomeCtrl', function ($timeout) {

    var vm = this;

    $timeout(function(){
      angular.element(document.getElementById('impresshook')).scope().$emit('initImpress');
      resizeDiv();
  },1);


resizeDiv();

var $INTROimg = $("#introContainer");
var $LEFTdoor = $("#leftDoor");
var $RIGHTdoor = $("#rightDoor");
var $BODY = $("body");
        
function resizeDiv() 
{//height == x axis, width == y axis

      var vpw = $(window).width();
      var vph = $(window).height();
      var asp = ( vph / vpw );
      var area = ( vph * vpw );

/*
      var $INTROimg = $("#introContainer");
      var $LEFTdoor = $("#leftDoor");
      var imgContH = $($INTROimg).height();
      var imgH = $($LEFTdoor).height();
      if (imgH > imgContH) {
        $(" $INTROimg ")
          .find('*')
          .css('height', imgContH);
      } else (imgH < imgContH) { 
        $(" $INTROimg ")
          .find('*')
          .css('height', imgContH);
      }
*/
      var $BODY = $("body");
      var bodyH = $($BODY).height();
      var bodyW = $($BODY).width();

      var minusTen = (bodyH - 10);
      $( $INTROimg )
        .css({"width": "auto" })
        .children()
        .children()
        .css({"width": bodyW })
        .css({"height": minusTen + "px"});
      var imgWidth1 = $( $LEFTdoor ).width();
      var imgWidth2 = $( $RIGHTdoor ).width();
      var imgWidth = imgWidth1 + imgWidth2;
      var imgLeft = ((bodyW - imgWidth)/2);
      var imgWidthMax = ((bodyW / 2) - 16);
      $( $INTROimg )
        .css({"left": imgLeft + "px"});
      if (imgWidth > bodyW) {        
      	$( $INTROimg )
        .css({"left": 8 + "px"})
        .css({"height": 'auto'})
        .css({"width": bodyW - 16 + "px"})
        .children()
        .children()
        .css({"height": 'auto'})
        .css({"width": imgWidthMax + "px"});
      };

    //impress.js slides
    var $view = $(' #impresshook ');
    var $slides = $(' .slide ');
      var slideH = bodyH;
      var slideW = bodyW ;
    $( $slides )
        .css("height", slideH)
        .css("width", slideW);

}



window.onresize = function(event) {
resizeDiv();
};

window.addEventListener('resize', resizeDiv);

imagesLoaded("body", resizeDiv());
resizeDiv();

imagesLoaded("#introContainer", function(){
  resizeDiv();
  });


// This is a hover event for the background //
 $( $LEFTdoor ).hoverIntent( luxFit, lux );
 $( $RIGHTdoor ).hoverIntent( luxFiat, lux );
 $( $BODY ).hoverIntent( lux );		 


function lux (event) {
  $( $BODY )
  .velocity('stop')
  .velocity({
    p: {backgroundColorAlpha: 1, 
      backgroundColor: "#DAF3F9"}, 
    o: {duration: 1111, queue: false}
    });
  $( $LEFTdoor )
  .velocity('stop')
  .velocity({
    p: {rotateY: 0,
        scale: 1}, 
    o: {duration: 1111, queue: false}
    });
  $( $RIGHTdoor )
    .velocity('stop')
    .velocity({
      p: {rotateY: 0,
          scale: 1}, 
      o: {duration: 1111, queue: false}
      });
}

function luxFiat (event) {
  $( $BODY )
  .velocity('stop')
  .velocity({
    p: {backgroundColorAlpha: 0, 
      backgroundColor: "#FFFFFF"}, 
    o: {duration: 3333, queue: false}
    });
  $( event.target )
  .velocity('stop')
  .velocity({
    p: {rotateY: 45,
        scale: 1}, 
    o: {duration: 3333, queue: false}
    });
  $( event.target )
    .siblings()
    .velocity('stop')
    .velocity({
      p: {rotateY: 0,
          scale: 1}, 
      o: {duration: 3333, queue: false}
      });
}

function luxFit (event) {
  $( $BODY )
  .velocity('stop')
  .velocity({
    p: {backgroundColorAlpha: 1, 
      backgroundColor: "#000000"}, 
    o: {duration: 3333, queue: false}
    });
  $( event.target )
  .velocity('stop')
  .velocity({
    p: {rotateY: -25,
        scale: 1}, 
    o: {duration: 3333, queue: false}
    });
  $( event.target )
  .siblings()
  .velocity('stop')
  .velocity({
    p: {rotateY: 0,
        scale: 1}, 
    o: {duration: 3333, queue: false}
    });
}





    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
