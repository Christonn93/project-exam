// Adding function for the dropdown on mobile screens
export function hamburgerMenu() {
 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".page-navigation");

 hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
 });

 document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
  })
 );
}
