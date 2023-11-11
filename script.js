$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });

  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

function toggleMenu() {
    var sandwichMenu = document.querySelector('.sandwich-menu');
    sandwichMenu.classList.toggle('show-menu');
  }
