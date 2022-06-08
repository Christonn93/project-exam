// Function for setting title and active state on navigation bar
export async function setTitle(location) {
 let id = ``;

 // switch for defining current page to set title and targeting the id of the link to add active state
 switch (location) {
  case "home":
   id = 1;
   document.title = `T.W.O.C || Home page`;
   break;

  case "postListing":
   id = 2;
   document.title = `T.W.O.C || All posts`;
   break;

  case "postDetail":
   id = 2;
   document.title = `T.W.O.C || ${postArray[0].slug}`;
   break;

  case "about":
   id = 3;
   document.title = `T.W.O.C || About`;
   break;

  case "contact":
   id = 4;
   document.title = `T.W.O.C || Contact`;
   break;

  case "filtered":
   id = 2;
   document.title = `T.W.O.C || Filtered posts`;
   break;

  default:
   break;
 }
// Selecting the current page based on id on the link to set active style on the navigation link
 const activeNav = document.querySelector("#nav-link_" + `${id}`);
 activeNav.classList.add("active-link");
}
