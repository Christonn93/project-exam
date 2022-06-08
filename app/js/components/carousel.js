// Importing other files that is needed for this to work
import { displayMessage } from "./message.js";

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

const createSlideCards = (title, date, image, content, id) => {
 // Creating the card
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

 // Creating the main container and the children containers
 const slideFrame = elementFactory("slide");
 const slideCard = createChildren("card", cardImage, cardBody);
 slideFrame.append(slideCard);
 const containerSlide = document.querySelector(".container-slide-show");
 containerSlide.append(slideFrame);
};

// using js to ellipse the content
function truncate(str, n) {
 return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
}

// Making each slide for the carousel
async function generateSlideElements() {
 try {
  const url = `https://christopher-tonnesland.no/School-projects/project_exam_site/wp-json/wp/v2/posts`;
  const request = await fetch(url);
  const response = await request.json();

  response.forEach((e) => {
   const title = e.title.rendered;
   const date = e.x_date;
   const image = e.featured_image_url;
   const content = truncate(e.excerpt.rendered, 175);
   const id = e.id;

   createSlideCards(title, date, image, content, id);
  });

  function playSlideShow() {
   // const elements inside the slide.
   const slideItems = document.querySelectorAll(".slide");
   const button_next = document.querySelector(".next-btn");
   const button_prev = document.querySelector(".prev-btn");

   slideItems.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
   });

   // Counter
   let count = 0;

   // next button event listener
   button_next.addEventListener("click", function () {
    count++;
    slide();
   });

   // Prev button event listener
   button_prev.addEventListener("click", function () {
    count--;
    slide();
   });

   function slide() {
    // Making the slides go back
    if (count === slideItems.length) {
     count = 0;
    }

    // Making it go both ways from the first slide
    if (count < 0) {
     count = slideItems.length - 1;
    }

    // Adding translate(x) to the style of the slides.
    slideItems.forEach(function (slide) {
     slide.style.transform = `translateX(-${count * 100}%)`;
    });
   }
  }
  playSlideShow();
 } catch (error) {
  displayMessage("error");
 }
}
generateSlideElements();
