'use strict';

angular.module('betweenVisits')
  .controller('HomeCtrl', function () {

    var vm = this;

var $INTROimg = $("#introContainer");
var $LEFTdoor = $("#leftDoor");
var $RIGHTdoor = $("#rightDoor");
var $BODY = $("body");
        
function resizeDiv() 
{//height == x axis, width == y axis

      var $INTROimg = $("#introContainer");
      var vpw = $(window).width();
      var vph = $(window).height();
      var asp = ( vph / vpw );
      var area = ( vph * vpw );
      var minusTen = (vph - 10);
      $( $INTROimg )
        .css({"width": "auto" })
        .children()
.children()
        .css({"width": "auto" })
        .css({"height": minusTen + "px"});
      var imgWidth1 = $( $LEFTdoor ).width();
      var imgWidth2 = $( $RIGHTdoor ).width();
      var imgWidth = imgWidth1 + imgWidth2;
      var imgLeft = ((vpw - imgWidth)/2);
      var imgWidthMax = ((vpw / 2) - 16);
      $( $INTROimg )
        .css({"left": imgLeft + "px"});
      if (imgWidth > vpw) {        
      	$( $INTROimg )
        .css({"left": 8 + "px"})
        .css({"top": -imgLeft + "px"})
        .css({"height": 'auto'})
        .css({"width": vpw - 16 + "px"})
        .children()
.children()
        .css({"height": 'auto'})
        .css({"width": imgWidthMax + "px"});
      };

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
  console.log("this is Lux");
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
  console.log("this is Fiat");
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
  console.log("this is Fit");
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





    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
