// Creating and appending the footer and footer content
export function generateFooter() {
 const footer = document.querySelector("footer");
 footer.classList.add("page-footer");
 footer.innerHTML = `<p class="copyright"><i class="fa-solid fa-copyright"></i> Christopher Tønnesland</p>`;
}
