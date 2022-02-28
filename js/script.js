// nav
window.addEventListener('scroll', function () {
  let header = document.querySelector('nav');
  let windowPosition = window.scrollY > 590;
  header.classList.toggle('scrolling-active', windowPosition);
  console.log(header);
});

// slider
$('.owl-carousel').owlCarousel({
  nav: true,
  loop: true,
  margin: 5,
  items: 2,
  responsiveClass: true,
  responsive: {
    700: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});
