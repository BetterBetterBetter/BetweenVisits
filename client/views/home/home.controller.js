'use strict';

angular.module('betweenVisits')
  .controller('HomeCtrl', function ($timeout) {

    var vm = this;

    $timeout(function(){
      angular.element(document.getElementById('impresshook')).scope().$emit('initImpress');
      resizeDiv();
      $("#introContainer").css( "opacity", "0" );
  },1);

if ( $( 'html' ).hasClass(".no-svg") || $( 'html' ).hasClass(".no-svgfilter") ){
  $("img#leftDoor").attr("src", "assets/images/white.png");
  $("img#rightDoor").attr("src", "assets/images/black.png");
}

resizeDiv();

var $INTROimg = $("#introContainer");
var $LEFTdoor = $("#leftDoor>img");
var $RIGHTdoor = $("#rightDoor>img");
var $BODY = $("body");
        
function resizeDiv() 
{//height == x axis, width == y axis

      var vpw = $(window).width();
      var vph = $(window).height();
      var asp = ( vph / vpw );
      var area = ( vph * vpw );


      var $INTROimg = $("#introContainer");
      if (asp < .799 ) {
        $( $INTROimg )
          .find('img')
          .css('width', 'auto')
          .css('height', '100%');        
      } else {
        $( $INTROimg )
          .find('img')
          .css('height', 'auto')
          .css('width', '49.9%');
      }
      /*
      var $BODY = $("body");
      var bodyH = $($BODY).height();
      var bodyW = $($BODY).width();

    //impress.js slides
    var $slides = $(' .slide ');
    if (asp > 1.13) {
        var slideH = bodyH * asp;
        var slideW = bodyW;    
      } else {
        var slideH = bodyH * 1.8 - bodyH * asp;
        var slideW = bodyW * 1.8 - bodyW * asp;
      }
    //$( $slides )
    //  .css("height", slideH)
    //  .css("width", slideW);
  */
}



window.onresize = function(event) {
resizeDiv();
};

window.addEventListener('resize', resizeDiv);

//Hides the doors until loaded, then fades in & removes element.style
$("#introContainer").imagesLoaded()
  .always( function( instance ) {
    resizeDiv();
    $("#introContainer").velocity("transition.fadeIn", 1111);
    $timeout(function(){
      $("#introContainer").css( "opacity", "" );
    }, 1112);
  });


// This is a hover event for the background //
 $( $LEFTdoor ).hoverIntent( luxFit, lux );
 $( $RIGHTdoor ).hoverIntent( luxFiat, lux );
 $( $BODY ).hoverIntent( lux );		 

//body hover
function lux (event) {
  if( $( $LEFTdoor ).hasClass("clicked") === false && $( $RIGHTdoor ).hasClass("clicked") === false )  {  
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
}

//RightDoor hover
function luxFiat (event) {
  if( $(event.target).hasClass("clicked") === false ) {
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
}

//LeftDoor hover
function luxFit (event) {
  if( $(event.target).hasClass("clicked") === false ) {
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
      p: {rotateY: -45,
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
}

//Door click events
////Doors swing open when clicked, passes through to next slide
 $( $LEFTdoor ).click( leftOpen );
 $( $RIGHTdoor ).click( rightOpen );

 function leftOpen (event) {
    $( this )
    .addClass("clicked")
    .velocity('stop')
    .velocity({
      p: {rotateY: -90,
          scale: 1}, 
      o: {duration: 777, queue: false}
      });

    $timeout(function(){
      $($LEFTdoor)
      .removeClass("clicked")
      .velocity('stop')
      .velocity({
        p: {rotateY: 0,
          scale: 1}, 
        o: {duration: 777, queue: false}
      });
      lux();
    }, 778);
 }
 function rightOpen (event) {
    $( this )
    .addClass("clicked")
    .velocity('stop')
    .velocity({
      p: {rotateY: 90,
          scale: 1}, 
      o: {duration: 777, queue: false}
      });

    $timeout(function(){
      $($RIGHTdoor)
      .removeClass("clicked")
      .velocity('stop')
      .velocity({
        p: {rotateY: 0,
          scale: 1}, 
        o: {duration: 777, queue: false}
      });
      lux();
    }, 778);
 }




    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
