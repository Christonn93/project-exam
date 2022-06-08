// Importing other files that is needed for this to work
import { fetchPostDetails } from "./backend/apiConn.js";
import { displayMessage } from "./components/message.js";
import { setTitle } from "./components/functions/setTitle.js";

setTitle("postListing");
// Selecting HTML elements
const topSection = document.getElementById("section-top");
const middleSection = document.getElementById("section-middle");

// Params search to find the id of the post to display the content
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post_id");
console.log("Post id:", id);

// Top section
async function getData() {
 try {
  // Calling the api
  const p = await fetchPostDetails(id);

  // Adding variable value from API data
  const title = p.title.rendered;
  const content = p.content.rendered;
  const author = p.x_author;
  const data = p.x_date;
  const slug = p.slug;

  const categories = p.x_categories;
  const mainImage = p.x_featured_media;

  // Setting the page title adn active link
  document.title = `T.W.O.C || ${slug}`;
  const activeNav = document.querySelector("#nav-link_2");
  activeNav.classList.add("active-link");

  // Creating breadcrumbs elements
  const breadBox = document.createElement("div");
  const breadcrumbList = document.createElement("ul");
  const breadSlice = document.createElement("li");
  const breadSliceTwo = document.createElement("li");
  const slash = document.createElement("li");

  // Adding classes to elements
  breadBox.classList.add("breadcrumb-container");
  slash.classList.add("breadcrumb-link");

  // Adding content to the breadcrumb
  breadSlice.innerHTML = `<a href="/app/pages/posts/post_listing/index.html" class="breadcrumb-link">My posts</a>`;
  breadSliceTwo.innerHTML = `<a href="" class="breadcrumb-link">${title}</a>`;
  slash.innerHTML = `<a class="breadcrumb-link">/</a>`;

  // Appending the crumbs
  breadcrumbList.append(breadSlice, slash, breadSliceTwo);
  breadBox.append(breadcrumbList);

  // Appending the crumb box
  topSection.append(breadBox);

  // Creating the blog-post
  function elementFactory(className = "", children = []) {
   const container = document.createElement("div");
   container.classList.add(className);
   container.append(children);
   return container;
  }

  middleSection.append(elementFactory("flex-container"));

  // Displaying the content from the post
  const contentContainer = document.querySelector(".flex-container");
  contentContainer.classList.add("flex-col", "post-details");

  contentContainer.innerHTML = `<div class="container article-container">
 <h1>${title}</h1>
 <article>${content}</article>
 <div id="image-modal" class="modal" onclick="this.style.display='none'">
 <span class="close"></span>
 <div class="modal-content">
   <img id="image" style="max-width:100%">
 </div>
 </div>
 `;

  // Creating a image modal for the images in the post
  const images = document.querySelectorAll(".post-image");

  images.forEach((img) => {
   function onClick() {
    const image = document.getElementById("image");
    image.src = img.src;
    document.getElementById("image-modal").style.display = "block";
   }

   img.addEventListener("click", onClick);
  });

  const loader = document.querySelector(".loader");
  loader.style = "display: none;";
 } catch (error) {
  // Catching and displaying errors
  console.log(error);
  return displayMessage("error");
 }
}
getData();
