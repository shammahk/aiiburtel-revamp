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