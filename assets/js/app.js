const header = document.querySelector("#header");
let introH = document.querySelector("#intro").clientHeight;
let scrollOffset = window.scrollY;

/* Fixed Header */
checkScroll(scrollOffset);

window.addEventListener("scroll", function () {
  scrollOffset = this.scrollY;
  checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
  if (scrollOffset >= introH) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

/* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
    $("#nav").removeClass("active");
    $("#nav_toggle").removeClass("active");
  });



/* Menu nav toggle */
$("#nav_toggle").on("click", function (event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

/* Collapse */
$("[data-collapse]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data("collapse");

  $(".accordion__item").removeClass("active");
  $this.toggleClass("active");
});

/* Slider */
$("[data-slider]").slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

/* scrollOffset = window.scrollY;
https://properprogramming.com/tools/jquery-to-javascript-converter/

https://only-to-top.ru/blog/coding/2019-09-24-jquery-to-js.html */

// window.onload = function () {
//   var header = $("#header"),
//     introH = $("#intro").innerHeight(),
//     scrollOffset = $(window).scrollTop();

//   /* Fixed Header */
//   checkScroll(scrollOffset);

//   $(window).on("scroll", function () {
//     scrollOffset = $(this).scrollTop();

//     checkScroll(scrollOffset);
//   });

//   function checkScroll(scrollOffset) {
//     if (scrollOffset >= introH) {
//       header.addClass("fixed");
//     } else {
//       header.removeClass("fixed");
//     }
//   }

//   /* Smooth scroll */
//   $("[data-scroll]").on("click", function (event) {
//     event.preventDefault();

//     var $this = $(this),
//       blockId = $this.data("scroll"),
//       blockOffset = $(blockId).offset().top;

//     $("#nav a").removeClass("active");
//     $this.addClass("active");

//     $("html, body").animate(
//       {
//         scrollTop: blockOffset,
//       },
//       500
//     );
//     $("#nav").removeClass("active");
//     $("#nav_toggle").removeClass("active");
//   });

//   /* Menu nav toggle */
//   $("#nav_toggle").on("click", function (event) {
//     event.preventDefault();

//     $(this).toggleClass("active");
//     $("#nav").toggleClass("active");
//   });

//   /* Collapse */
//   $("[data-collapse]").on("click", function (event) {
//     event.preventDefault();

//     var $this = $(this),
//       blockId = $this.data("collapse");

//     $(".accordion__item").removeClass("active");
//     $this.toggleClass("active");
//   });

//   /* Slider */
//   $("[data-slider]").slick({
//     infinite: true,
//     fade: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });
// };
