// Importing other files that is needed for this to work
import { generateHeader } from "./components/layout/header.js";
import { hamburgerMenu } from "./components/hamburger.js";
import { generateFooter } from "./components/layout/footer.js";

// displayMessage();
generateHeader();
generateFooter();
hamburgerMenu();

// Loading div for each side
const loader = document.querySelector(".loader");
if (loader) {
 loader.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 150">
    <ref>
     <g id="box">
      <rect x="39.6" y="39.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -30.9804 74.9561)" width="70.7" height="70.7" />
      <line x1="75" y1="24.8" x2="75" y2="124.8" />
      <line x1="125" y1="74.8" x2="25" y2="74.8" />
     </g>
     <g id="circle-area">
      <rect x="39.6" y="39.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -30.9804 74.9561)" width="70.7" height="70.7" />
      <circle class="solid-circle" r="2" cy="25" cx="75">
       <animate attributeName="cy" begin="0s" dur="4s" repeatCount="indefinite" values="25; 75; 25" />
      </circle>
      <circle class="solid-circle" r="2" cy="125" cx="75">
       <animate attributeName="cy" begin="0s" dur="4s" repeatCount="indefinite" values="125; 75; 125" />
      </circle>
     </g>
    </ref>
    
    <rect id="expanding-rect" x="75" y="75" width="0" height="0">
     <animate id="width" attributeName="width" begin="2s;width.end+2s" dur="2s" values="0; 70.7;" />
     <animate id="height" attributeName="height" begin="2s;height.end+2s" dur="2s" values="0; 70.7;" />
     <animate id="x" attributeName="x" begin="2s;x.end+2s" dur="2s" values="75; 39.65;" />
     <animate id="y" attributeName="y" begin="2s;y.end+2s" dur="2s" values="75; 39.65;" />
    </rect>
    <use id="outer-circle" xlink:href="#circle-area" />
    <circle stroke-width="2" cy="75" cx="75" r="50" />
    <use id="box1" xlink:href="#box" />
    <use id="box2" xlink:href="#box" />
    <use id="box3" xlink:href="#box" />
    </svg>`;
}

// Creating description meta on each side
let descriptionMeta = document.createElement("meta");
descriptionMeta.setAttribute("name", `description`);
descriptionMeta.content = `The World Of Conspiracy blog. This blog is sharing posts from other sources. And its all about conspiracy, facts and fun facts.`;

// Creating author meta on each side
let authorMeta = document.createElement("meta");
authorMeta.setAttribute("name", `author`);
authorMeta.content = `Christopher Tønnesland`;

// Creating Keywords meta on each side
let keyWordsMeta = document.createElement("meta");
keyWordsMeta.setAttribute("name", `keywords`);
keyWordsMeta.content = `Blog, Conspiracy theory, World-News, Fact, Fiction, Alternative Thinking`;

document.getElementsByTagName("head")[0].appendChild(descriptionMeta);
document.getElementsByTagName("head")[0].appendChild(authorMeta);
document.getElementsByTagName("head")[0].appendChild(keyWordsMeta);

// Adding link tags inside header on each page
const loadingFonts = (type) => {
 const link = document.createElement("link");
 link.type = "text/css";
 link.rel = "stylesheet";
 link.href = type.url + type.fam + type.display;
 document.head.appendChild(link);
};

// Header fonts
loadingFonts({
 url: "http://fonts.googleapis.com/css?family=",
 fam: "Newsreader:ital,opsz,wght@0,6..72,200;1,6..72,200",
 display: "&display=swap",
});

loadingFonts({
 url: "http://fonts.googleapis.com/css?family=",
 fam: "Roboto+Slab:wght@100;300;400;600;700",
 display: "swap",
});

// Body(copy) fonts
loadingFonts({
 url: "http://fonts.googleapis.com/css?family=",
 fam: "Neuton:wght@300",
 display: "swap",
});

loadingFonts({
 url: "http://fonts.googleapis.com/css?family=",
 fam: "Roboto+Condensed:wght@400;700",
 display: "swap",
});

// Link fonts
loadingFonts({
 url: "http://fonts.googleapis.com/css?family=",
 fam: "Big+Shoulders+Text:wght@200",
 display: "swap",
});

loadingFonts({
 url: "http://fonts.googleapis.com/css?family=",
 fam: "Roboto+Flex",
 display: "swap",
});
