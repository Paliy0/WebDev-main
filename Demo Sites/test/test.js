/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
$(document).ready(function () {

  'use strict';

   var c, currentScrollTop = 0,
       navbar = $('navbar');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });

});
