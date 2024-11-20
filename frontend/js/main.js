let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function scrollL() {
  const section = document.getElementById("sale-section");
  section.scrollBy({
    left: -1630,
    behavior: "smooth"
  })
}

function scrollR() {
  const section = document.getElementById("sale-section");
  section.scrollBy({
    left: 1630,
    behavior: "smooth"
  })
}

function toggleMenu(menu) {
  menu.classList.toggle("change");
  document.getElementById("dropdown-content").classList.toggle("show");
  document.getElementById("shade").classList.toggle("shade");
}

// window.onclick = function(event) {
//   if (!event.target.matches('.menu-container')) {
//     var dropdowns = document.getElementsByClassName("dropdown");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropDown = dropdowns[i];
//       if (openDropDown.classList.contains('show')) {
//         openDropDown.classList.remove('show');
//       }
//     }
//   }
// }