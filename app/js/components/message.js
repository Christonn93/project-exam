export function displayMessage(type) {
 // Selecting html
 const main = document.querySelector("#section-middle");
 const errorContainer = document.createElement("div");

 // Setting the innerHTML of the message
 const error = "Oh no. Something really bad went wrong here.... Try again later";
 const success = "Oh yes. everything went well!";
 const alert = "THIS IS AN ALERT FROM THE CREATOR";
 const warning = "THIS IS A WARNING";
 const empty = "You have reach the end of the line of posts. Hope you have found something interesting."
 const empty2 = "If you have a theory you would like to see, please don't hesitate to contact us."

 // Switch to define what feedback should be given
 switch (type) {
  case "error":
   errorContainer.classList.add("feedback-container", "error");
   errorContainer.innerHTML = `<p>${error}</p>`;
   break;

  case "success":
   errorContainer.classList.add("feedback-container", "success");
   errorContainer.innerHTML = `<p>${success}</p>`;
   break;

  case "alert":
   errorContainer.classList.add("feedback-container", "alert");
   errorContainer.innerHTML = `<p>${alert}</p>`;
   break;

  case "warning":
   errorContainer.classList.add("feedback-container", "warning");
   errorContainer.innerHTML = `<p>${warning}</p>`;
   break;

   case "empty":
   errorContainer.classList.add("feedback-container", "alert");
   errorContainer.innerHTML = `<p>${empty}</p><p>${empty2}</p>`;
   break;

 }
 main.append(errorContainer);
}
