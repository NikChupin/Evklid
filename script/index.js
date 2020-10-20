
/* swiper */
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* /swiper */

/* burger */
document.querySelector("#burger").addEventListener("click", function () {
  document
    .querySelector("#burger")
    .classList.toggle("section-header-burger-click");
  document.querySelector("#header-section-outer").classList.toggle("padding-bottom-plus");
});
/* /burger */

/* acordion */

$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    header: "h3", collapsible: true, active: false
  });
} );

document
  .querySelector(".section-questions-wrapper")
  .addEventListener("click", function () {
    document
      .querySelectorAll("#section-question-item-open")
      .forEach(function (el) {
        if (el.classList.contains("ui-state-active")) {
          el.querySelector("#question-item-open-plus-animation").classList.add(
            "is-active"
          );
        } else {
          el.querySelector(
            "#question-item-open-plus-animation"
          ).classList.remove("is-active");
        }
      });
  });
/* /acordion */
