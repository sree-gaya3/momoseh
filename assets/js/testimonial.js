"use strict";
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};

/* ----------------- Type 2 --------------------*/
$(document).ready(
  (function () {
    $(".client-single").on("click", function (event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  })(jQuery)
);

/* ------------ Type 5 -------------*/
$(function () {
  $(".owl-carousel.testimonial-carousel").owlCarousel({
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
    },
  });
});

/*---------------- Type 8 ---------------*/
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

/*---------------------- Type 9 -----------------------*/

$(document).ready(function () {
  $("#testimonial-slider2").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [600, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    slideSpeed: 1000,
    autoPlay: true,
  });
});

/*---------------------------------- Type 10 ---------------------------------*/

$(document).ready(function () {
  $("#testimonial-slider3").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    slideSpeed: 1000,
    singleItem: true,
    transitionStyle: "goDown",
    navigationText: ["", ""],
    autoPlay: false,
  });
});

/*--------------------- Type 11 -------------------------*/
$(document).ready(function () {
  $("#testimonial-slider4").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [767, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    slideSpeed: 500,
    autoPlay: false,
  });
});

/*----------------------------------- Type `12-----------------------------*/
$(document).ready(function () {
  $("#testimonial-slider5").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    autoPlay: false,
  });
});

/*------------------------------ Type 13 ----------------------------*/

$(document).ready(function () {
  $("#testimonial-slider6").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [767, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

/*----------------------------- Type 14 ----------------------------------------*/
$(document).ready(function(){
  $("#testimonial-slider7").owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,1],
      pagination:false,
      navigation:true,
      navigationText:["",""],
      autoPlay:true
  });
});

/*----------------------------- Type 15 ---------------------------*/
$(document).ready(function(){
  $("#testimonial-slider8").owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,1],
      pagination:true,
      navigation:false,
      autoplay:true
  });
});

/*---------------------------- Type 16 ------------------------*/
$(document).ready(function(){
  $("#testimonial-slider9").owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768,1],
      pagination:true,
      transitionStyle:"backSlide",
      autoPlay:true
  });
});

/*----------------------------- Type 17 -----------------------------*/
$(document).ready(function(){
  $("#testimonial-slider10").owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[990,1],
      itemsTablet:[768,1],
      pagination:true,
      navigation:false,
      navigationText:["",""],
      slideSpeed:1000,
      autoPlay:true
  });
});