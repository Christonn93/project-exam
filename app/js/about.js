// Importing other files that is needed for this to work
import { setTitle } from "./components/functions/setTitle.js";
import { displayMessage } from "./components/message.js";
import { fetchPages } from "./backend/apiConn.js";
setTitle("about");
fetchPages();

// Generating the content from WP about page and displaying it on the front-end
async function displayPage() {
 try {
  const page = await fetchPages();
  const container = document.querySelector("#content");

  page.forEach((el) => {
   const contentContainer = document.createElement("div");
   const content = el.content.rendered;

   contentContainer.innerHTML = content;

   if (el.slug === "about-us") {
    container.append(contentContainer);
   }
  });
 } catch (error) {
  displayMessage("error");
 }
}
displayPage();
