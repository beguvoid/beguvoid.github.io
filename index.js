document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll measure
// 297 to change class.

// document.addEventListener("scroll", (e) => {
//   let measureY = window.scrollY;
//   if (measureY > 190) {
//     document.getElementById("contact-me").style.position = "fixed";
//   } else if (measureY < 110) {
//     document.getElementById("contact-me").style.position = "";
//   }
// });
