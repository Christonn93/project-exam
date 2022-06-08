document.getElementById("");

// Creating elements in a neat small reusable function
function elementFactory(elementName = "div", className = "", elementId = "", children = []) {
 const element = document.createElement(elementName);
 element.classList.add(className);
 element.id = elementId;
 element.append(children);
 return element;
}

// Creating children content for the element factory
function createChildren(elementName = "div", className = "", elementId = "") {
 const element = document.createElement(elementName);
 element.classList.add(className);
 element.id = elementId;
 return element;
}

const id = "elm-id-1";

appTwo.append(elementFactory("div", "container", "container-id", createChildren("div", "child-container", `${id}`)));

const childElementOne = document.querySelector(".child-container");
childElementOne.innerHTML = `<h1>Hello, this worked fine!</h1>`;
