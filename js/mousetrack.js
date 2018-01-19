$(document).ready(function() {
  let speed = 100 ;   //Higher number is slower...
  let width = $(window).width() ;
  let height = $(window).height() ;

  $("#mouse-container").mousemove(function(e){
    let pageX = e.pageX;
    let pageY = e.pageY;
    let distanceX = Math.abs(pageX-width)
    let newvalueX = function(){
      if (pageX > width/2) {
        return (48 - (pageX-width)/2/speed);
      }else { return(48 + (width-pageX)/2/speed);}
    };
    let newvalueY = function(){
      if (pageY > height/2) {
        return (50 - (pageY-height)/speed);
      }else { return(50 + (height-pageY)/speed);}
    };

    $('#mouse-image').css("background-position", newvalueX()+"% "+newvalueY()+"% ");
  });
});

$(document).ready(function() {
  let speed = 50 ;   //Higher number is slower...
  let width = $(window).width() ;
  let height = $(window).height() ;
  $("#mouse-container").mousemove(function(e){
    let pageX = e.pageX;
    let pageY = e.pageY;
    let newvalueX = function(){
      if (pageX > width/2) {
        return (50 - (pageX-width)/2/speed);
      }else { return(50 + (width-pageX)/2/speed);}
    };
    let newvalueY = function(){
      if (pageY > height/2) {
        return (50 - (pageY-height)/2/speed);
      }else { return(50 + (height-pageY)/2/speed);}
    };

    $('#back-image').css("background-position", newvalueX()+"% "+newvalueY()+"% ");
  });
});
