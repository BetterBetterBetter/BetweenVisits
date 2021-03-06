'use strict';

angular.module('betweenVisits')
  .controller('HomeCtrl', ['$timeout', 'screenmatch', function ($timeout, screenmatch) {

    var vm = this;

    $timeout(function(){
      angular.element(document.getElementById('impresshook')).scope().$emit('initImpress');
      resizeDiv();
      $(".introContainer").css( "opacity", "0" );
  },1);

if ( $( 'html' ).hasClass(".no-svg") || $( 'html' ).hasClass(".no-svgfilter") ){
  $("img.leftDoor").attr("src", "assets/images/white.png");
  $("img.rightDoor").attr("src", "assets/images/black.png");
}

resizeDiv();
resizeText();

var $INTROimg = $(".introContainer");
var $LEFTdoor = $(".leftDoor>img");
var $RIGHTdoor = $(".rightDoor>img");
var $BODY = $("body");
        
function resizeDiv() 
{//height == x axis, width == y axis

      var vpw = $(window).width();
      var vph = $(window).height();
      var asp = ( vph / vpw );
      var area = ( vph * vpw );


      var $INTROimg = $(".introContainer");
      if (asp < .999 ) {
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

      var $slides = $('.slide');
      var adjustedFontSize = area * .00001 + 7.77;
      $($slides)
        .css('font-size', adjustedFontSize);

        resizeText();
}


//hide Impress for xs device
screenmatch.when('xxs', function () {
    
  $("#impresshook")
    .css('display', 'none');

    }, function () {
    
  $("#impresshook")
    .css('display', 'block');

});



function resizeText(){
  
      var vpw = $(window).width();
      var vph = $(window).height();
      var asp = ( vph / vpw );
      var area = ( vph * vpw );

      if (area < 400000) {
        $('.slide').css("line-height", "5.5em");
      } else if (400000 < area && area < 500000) {
        $('.slide').css("line-height", "5em");
      } else if (500000 < area && area < 600000) {
        $('.slide').css("line-height", "4.5em");
      }else if (600000 < area && area < 700000) {
        $('.slide').css("line-height", "4em");
      }else if (700000 < area && area < 800000) {
        $('.slide').css("line-height", "3.75em");
      }else if (800000 < area && area < 900000) {
        $('.slide').css("line-height", "4em");
      }else if (900000 < area && area < 1000000) {
        $('.slide').css("line-height", "3.5em");
      }else if (1000000 < area && area < 10000000) {
        $('.slide').css("line-height", "3em");
      }

  var $slideCont = $('.slideCont');
  if ( $('#impresshook').css('display') === 'block') { 
    $($slideCont).each(function(){
      if ( $(this).prop('scrollHeight') - $(this).prop('scrollHeight')*.2 > $(this).parent().height()) {
        if ( $(this).hasClass('bigger') ) {
          $timeout(function(){
            $($slideCont).removeClass('bigger');
          }, 1000);
        } else {
          var slideFontSize = parseInt($(this).css('font-size'));
          var slideLineHeight = parseInt($(this).css('line-height'));
          //console.log("smaller:" + slideFontSize + ", " + slideLineHeight);
          $(this).css('font-size', slideFontSize - .01);
          $(this).addClass("smaller");
          $timeout(function(){
            resizeText();
          }, 1);
        }
      } else if ( $(this).height() + $(this).height()*.2 < $(this).parent().height() ) {
        if ( $(this).hasClass('smaller') ) {
          $timeout(function(){
            $($slideCont).removeClass('smaller');
          }, 1000);
        } else {
          var slideFontSize = parseInt($(this).css('font-size'));
          var slideLineHeight = parseInt($(this).css('line-height'));
          //console.log("bigger:" + slideFontSize + ", " + slideLineHeight + ", and addLH" + addLineHeight);
          $(this).css('font-size', slideFontSize + 1);
          $(this).addClass("bigger");
          $timeout(function(){
            resizeText();
          }, 1);
        }
      }
    });
    
    

  }
}

//To handle maximize events, which do not register
periodicResize();
$timeout(function(){
  resizeDiv();
  resizeText();
  periodicResize();
}, 1111);
function periodicResize (){
  resizeDiv();
  resizeText();
  $timeout(function(){
    resizeDiv();
    resizeText();
    periodicResize();
  }, 2222);
}    


window.onresize = function(event) {
  resizeDiv();
  if ($('#impresshook').css('display') === 'block') { 
    resizeText();
  }
};

window.addEventListener('resize', resizeDiv);

//Hides the doors until loaded, then fades in & removes element.style
$(".introContainer").imagesLoaded()
  .always( function( instance ) {
    resizeDiv();
    //queue first slide animations
    $(".introContainer").addClass("fadeIn");
     $('.weCare').addClass('rollIn');
      $('.BV').addClass('lightSpeedIn');
      $('.soYou').addClass('rollIn');
      $('.drInfo').addClass('fadeInUpBig');
      $('.ptInfo').addClass('fadeInUpBig');
    $timeout(function(){
      $(".introContainer").css( "opacity", "" );
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

  navigatorAnimation();
  function navigatorAnimation() {
    $timeout(function(){
      $('.navigationArrows').addClass('rubberBand');
      $timeout(function(){
        $('.navigationArrows').removeClass('rubberBand');
      }, 3333);
      navigatorAnimation();
    }, 40000);
  }






  var margin = 0,
      diameter = $('.slide').height() / 1.5;

  var color = d3.scale.linear()
      .domain([-1, 5])
      .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
      .interpolate(d3.interpolateHcl);

  var pack = d3.layout.pack()
      .padding(2)
      .size([diameter - margin, diameter - margin])
      .value(function(d) { return d.size; })

  var svg = d3.select("#ptGraphic").append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
    .append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

  d3.json("/flare.json", function(error, root) {
    if (error) return console.error(error);

    var focus = root,
        nodes = pack.nodes(root),
        view;

    var circle = svg.selectAll("circle")
        .data(nodes)
      .enter().append("circle")
        .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
        .style("fill", function(d) { return d.children ? color(d.depth) : null; })
        .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

    var text = svg.selectAll("text")
        .data(nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
        .style("display", function(d) { return d.parent === root ? null : "none"; })
        .text(function(d) { return d.name; });

    var node = svg.selectAll("circle,text");


    d3.select("body")
        .on("click", function() { zoom(root); });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    function zoom(d) {
      var focus0 = focus; focus = d;

      var transition = d3.transition()
          .duration(d3.event.altKey ? 7500 : 750)
          .tween("zoom", function(d) {
            var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
            return function(t) { zoomTo(i(t)); };
          });

      transition.selectAll("text")
        .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
          .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
          .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
          .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }

    function zoomTo(v) {
      var k = diameter / v[2]; view = v;
      node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
      circle.attr("r", function(d) { return d.r * k; });
    }

  });

  d3.select(self.frameElement).style("height", diameter + "px");




 
  
var width = $('.slide').width()*.9;
var height = $('.slide').height()*.9;
var root;

var force = d3.layout.force()
    .linkDistance(80)
    .charge(-120)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick);

var svg2 = d3.select("#drGraphic").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg2.selectAll(".link"),
    node = svg2.selectAll(".node");

d3.json("flare.json", function(error, json) {
  root = json;
  update();
});

function update() {
  var nodes = flatten(root),
      links = d3.layout.tree().links(nodes);

  // Restart the force layout.
  force
      .nodes(nodes)
      .links(links)
      .start();

  // Update links.
  link = link.data(links, function(d) { return d.target.id; });

  link.exit().remove();

  link.enter().insert("line", ".node")
      .attr("class", "link");

  // Update nodes.
  node = node.data(nodes, function(d) { return d.id; });

  node.exit().remove();

  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .on("click", click)
      .call(force.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return Math.sqrt(d.size) / 10 || 4.5; });

  nodeEnter.append("text")
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  node.select("circle")
      .style("fill", color2);
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function color2(d) {
  return d._children ? "#000099" // collapsed package
      : d.children ? "#0066FF" // expanded package
      : "#6600CC"; // leaf node
}

// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}



    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  }]);
