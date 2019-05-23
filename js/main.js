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
