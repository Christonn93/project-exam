// Importing other files that is needed for this to work
import { fetchPages } from "./backend/apiConn.js";
import { displayMessage } from "./components/message.js";
import { setTitle } from "./components/functions/setTitle.js";

// Rendering the content from WP Home page
async function createContent() {
 try {
  const pageData = await fetchPages();
  for (let i = 0; i < pageData.length; i++) {
   const pageId = pageData[i].id;
   if (pageId === 55) {
    setTitle("home");
    const pageContent = pageData[i].content.rendered;
    const topSection = document.getElementById("section-top");
    topSection.innerHTML = `${pageContent}`;
   }
  }
 } catch (err) {
  return displayMessage("error");
 }
}
createContent();
