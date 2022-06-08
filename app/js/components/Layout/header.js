// Function to create the header and header content
export function generateHeader() {
 const header = document.querySelector("header");
 header.classList.add("page-header");

 // Generating the page brand name that is displaying in the header
 const brandContainer = document.createElement("div");
 brandContainer.classList.add("company-brand");
 const brandLabel = document.createElement("label");
 brandLabel.classList.add("brand-name");
 brandLabel.innerHTML = `<a href="/index.html" class="nav-link">The world of conspiracy</a>`;

 // Hamburger dropdown menu for mobile view
 const burger = document.createElement("div");
 burger.classList.add("hamburger");
 burger.innerHTML = `
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>`;

 // Defining the skip nav option for WCAG
 const navSkip = document.createElement("a");
 navSkip.href = "#main";
 navSkip.classList.add("skip-nav");
 navSkip.innerHTML = "Skip navigation";

 // Setting up nav and nav links
 const nav = document.createElement("nav");
 nav.classList.add("page-navigation");

 // Array with links and endpoints
 const pages = [
  {
   id: 1,
   name: "Home",
   url: "/index.html",
  },
  {
   id: 2,
   name: "Posts",
   url: "/app/pages/posts/post_listing/index.html?pr_page=10",
  },
  {
   id: 3,
   name: "About",
   url: "/app/pages/about/index.html",
  },
  {
   id: 4,
   name: "Contact",
   url: "/app/pages/contact/index.html",
  },
 ];

 for (let i = 0; i < pages.length; i++) {
  const navLink = document.createElement("a");

  navLink.classList.add("nav-link");
  navLink.innerText += `${pages[i].name}`;
  navLink.id = `nav-link_${pages[i].id}`;
  navLink.href += `${pages[i].url}`;
  nav.append(navLink);
 }

 // Page title
 let pageTitle = document.title;
 pageTitle = "Home";

 function setPageTitle(type) {
  switch (type) {
   case "Home":
    break;

   default:
    break;
  }
 }
 setPageTitle();

 //  console.log("Pages:", pages);
 brandContainer.append(brandLabel, burger, nav);
 header.append(navSkip, brandContainer);
}
