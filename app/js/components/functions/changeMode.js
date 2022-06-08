// This would be able to change from dark to light theme. 
// This part is not working, its added for future developments. 
const modeSelector = document.getElementById("switch");

function changeCSS(cssFile, cssLinkIndex) {
 const currentCss = document.getElementsByTagName("link").item(cssLinkIndex);

 const newCss = document.createElement("link");
 newCss.setAttribute("rel", "stylesheet");
 newCss.setAttribute("type", "text/css");
 newCss.setAttribute("href", cssFile);

 document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newCss, currentCss);
}

modeSelector.addEventListener("click", changeCSS());
