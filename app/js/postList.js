// Importing other files that is needed for this to work
import { displayMessage } from "./components/message.js";
import { setTitle } from "./components/functions/setTitle.js";

setTitle("postListing");

// Selecting HTML elements
const middleSection = document.getElementById("section-middle");
const buttonDiv = document.createElement("div");
const viewMoreBtn = document.createElement("button");

// Adding classes
buttonDiv.classList.add("flex-container", "flex-center");
viewMoreBtn.classList.add("btn");
viewMoreBtn.innerText = "View more";
buttonDiv.append(viewMoreBtn);

// Function to create container div
function elementFactory(className = "", children = []) {
 const container = document.createElement("div");
 container.classList.add(className);
 container.append(children);
 return container;
}

// Function to create content to render inside container div
function createChildren(className = "", image, content) {
 const container = document.createElement("div");
 container.classList.add(className);
 container.append(image, content);
 return container;
}

let createCards = (title, date, image, content, id) => {
 // Creating the card
 const card = document.createElement("div");
 card.classList.add("card");

 const cardBody = document.createElement("div");
 const cardImage = document.createElement("div");
 const cardHeader = document.createElement("div");
 const postDate = document.createElement("p");
 const postTitle = document.createElement("h3");
 const cardContent = document.createElement("div");
 const cardFooter = document.createElement("div");
 const loader = document.querySelector(".loader");

 // Adding classes
 cardBody.classList.add("card-body");
 cardImage.classList.add("card-image");
 cardHeader.classList.add("card-header");
 cardContent.classList.add("card-main");
 cardFooter.classList.add("card-footer");
 loader.style = "display: none;";

 // Adding content
 cardImage.style = `background-image: url(${image})`;
 postTitle.innerHTML = `<a href="/app/pages/posts/post_details/index.html?post_id=${id}" class="h3">${title}</a>`;
 postDate.innerText = `${date}`;
 cardContent.innerHTML = `${content}`;
 cardFooter.innerHTML = `<a href="/app/pages/posts/post_details/index.html?post_id=${id}" class="btn">Read more</a>`;

 // Appending
 cardHeader.append(postTitle, postDate);
 cardBody.append(cardHeader, cardContent, cardFooter);

 const postElements = createChildren("card", cardImage, cardBody);
 const flexContainer = document.querySelector(".card-frame");
 flexContainer.append(postElements);
 middleSection.append(buttonDiv);
};

function truncate(str, n) {
 return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
}

let page = 0;

const fetchPosts = async () => {
 page++;
 try {
  const url = `https://christopher-tonnesland.no/School-projects/project_exam_site/wp-json/wp/v2/posts?per_page=10&page=${page}`;
  const request = await fetch(url);
  const response = await request.json();

  response.forEach((e) => {
   const title = e.title.rendered;
   const date = e.x_date;
   const image = e.featured_image_url;
   const content = truncate(e.excerpt.rendered, 200);
   const id = e.id;

   createCards(title, date, image, content, id);

   if (response < 10) {
   }
  });
 } catch (error) {
  buttonDiv.style = "display: none";
  displayMessage("empty");
 }
};
fetchPosts();

viewMoreBtn.addEventListener("click", fetchPosts);
