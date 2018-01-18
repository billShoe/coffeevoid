$(document).ready(function() {
  var movementStrength = 50;
  var height = movementStrength / $(window).height() ;
  var width = movementStrength / $(window).width() /2;
  $("#mouse-image").mousemove(function(e){
    var pageX = e.pageX;
    var pageY = e.pageY;
    var newvalueX = width * pageX * -1 + 50;
    var newvalueY = height * pageY * 1 + 50;
    $('#mouse-image').css("background-position", newvalueX+"% "+newvalueY+"% ");
  });
});
