// Importing other files that is needed for this to work
import { fetchCategories, fetchTags } from "../backend/apiConn.js";
import { links as links } from "../utils/linkStorage.js";

// setting the page title and active link
document.title = `T.W.O.C || Home`;
const activeNav = document.querySelector("#nav-link_1");
activeNav.classList.add("active-link");

async function populateMenu() {
 // Fetching data from the api and my own json file
 const tags = await fetchTags();
 const categories = await fetchCategories();
 const link = links;

 // Function to create each box on the index page
 function createSection(boxTitle) {
  const section = document.querySelector("#section-bottom");
  section.classList.add("box-container");
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");
  section.append(boxContainer);

  const box = document.createElement("div");
  box.classList.add("box");

  const boxHeader = document.createElement("h4");
  boxHeader.innerText = boxTitle;

  const createUl = document.createElement("ul");

  // Setting the box for displaying Categories
  if (boxTitle === "Categories") {
   categories.forEach((e) => {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<a href="/app/pages/posts/post_filtering/index.html?slug=${e.slug}" class="nav-link box-link">${e.name}</a>`;
    createUl.append(createLi);
   });
  }

  // Setting the box for displaying tags
  if (boxTitle === "Tags") {
   tags.forEach((e) => {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<a href="/app/pages/posts/post_filtering/index.html?slug=${e.slug}" class="nav-link box-link">${e.name}</a>`;
    createUl.append(createLi);
   });
  }

  // Setting the box for displaying links.
  if (boxTitle === "Links") {
   link.forEach((e) => {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<a href="${e.url}" class="nav-link box-link" target=”_blank”>${e.name}</a>`;
    createUl.append(createLi);
   });
  }

  // Removing the page loader
  const loader = document.querySelector(".loader");
  loader.style = "display: none;";

  boxContainer.append(box);
  return box.append(boxHeader, createUl);
 }

 // Creating the boxes
 createSection("Categories");
 createSection("Tags");
 createSection("Links");
}
populateMenu();
