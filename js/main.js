var navbar=$("#navbar");
navbar.shown=false;

$(window).scroll(function(){
  if ($(this).scrollTop()>100) {
    if (!navbar.shown) {
      navbar.shown=true;
      navbar.hide();

    }
    navbar.removeClass("bg-color-transparent")
    navbar.addClass("bg-color-header");
    navbar.addClass("position-fixed");
    navbar.removeClass("position-absoulte");
    // navbar.css({"position":"fixed",
    //             "width":"100%"});
    navbar.slideDown();
  }
  else {
    navbar.removeClass("position-fixed");
    navbar.addClass("position-absoulte");
    navbar.addClass("bg-color-transparent");
    navbar.removeClass("bg-color-header");
    navbar.shown=false;
    navbar.show();
    //navbar.css({"position":"relative"})
  }
})

//multi- carousel scroll function
  //identify container and children
var multiCarousel=$(".multi-carousel");
var multiCarouselArray=$(".multi-carousel").children();

var gap=100;
//create a universal width value
var width=multiCarouselArray[0].width+gap;
//assign positions, height, and left values to the elements
for (var i = 0; i < multiCarouselArray.length; i++) {
  multiCarouselArray[i].position=i;
  var holder=i*width+gap/2;
  var height=multiCarouselArray[i].height;
  $(multiCarouselArray[i]).css({"left":holder,
                            "height":height});
}
//scroll function
setInterval(function () {
  for (var i = 0; i < multiCarouselArray.length; i++) {
    //if element is not in the first position simply animate to the left one width value
        if (multiCarouselArray[i].position>=0) {
          multiCarouselArray[i].position--;
          var holder=multiCarouselArray[i].position*width+gap/2;
          $(multiCarouselArray[i]).animate({"left":holder});
        }else{
          //if it is in the first position assign a left value to place it at the end of the multiCarousel
          //i used css() to not allow it to be seen moving positions
            multiCarouselArray[i].position=multiCarouselArray.length-2;
            var holder=multiCarouselArray[i].position*width+gap/2;
            $(multiCarouselArray[i]).css({"left":holder});
        }
  }
},3000)
