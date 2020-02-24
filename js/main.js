// Make Header Fixed on Scroll
const header = document.querySelector("#header");
const main = document.querySelector("main")

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("scrolled");
    // main.classList.add("mt-100");
  } else if (window.scrollY <10) {
    header.classList.remove("scrolled");
    // main.classList.remove("mt-100");
  }
})

// Slick
$('.slider-holder').attr('dir', 'rtl');

$('.slider').slick({
  infinite: true,
  speed: 8000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

$('.btm-slider').slick({
  infinite: true,
  speed: 10000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 0,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});
