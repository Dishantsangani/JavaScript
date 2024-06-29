// console.log(window);
// window.console.log("Dishant");
// window.alert("hello")

//Window Object
//The Window Object Represents an open windows in a browser. it is brower's object & is automatically created by browser
// it is a global object with lots of properties and methods

// What is DOM

// console.dir(document.body.childNodes[1]);
// console.log(document.body);

// document.body.style.background="green";

//Dom manipulation
// Selecting with id
// let heading = document.getElementById("header"); // h1
// console.dir(heading);

//Selecting with class
// let start = document.getElementsByClassName("start"); // h1
// console.dir(start);
// console.log(start);

// Selecting with tag
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

//Query selector

// let firstel = document.querySelector("p"); // 1st elements
// console.dir(firstel);

// let allel = document.querySelectorAll("p"); // all elements
// console.dir(allel);

// parent , child , siblings
// parentNode : returns the parent node of an element
// firstChild, lastChild: returns the first and last child of an element
// nextSibling, previousSibling: returns the next and previous sibling of an element

// Dom Manipulation
// properties
// tagname : returns tag for element nodes
// innertext : returns the text contectc of the element and all ts children
// innerhtml : returns the plain text or html contents in the element
// textcontent : returns the text contect even for hidden elements

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// Dom manupulation Part 2
// Attributes
// .getAttribute(attr) // to get the attribute value
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// .setAttribute(attr,value) // to set the attribute value
// Set attribute
// let para1 = document.querySelector("p");
// console.log(para1.setAttribute("class", "newclass"));

//Style
// let div = document.querySelector("div");
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.style.visibility="hidden"
// div.innerText = "dishant is a good boy ";

// insert Elements
// node.append(el) //adds at the end of node
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

//  node.prepend(el) //adds at the start of node
// div.prepend(newBtn);

// node.before(el) //adds before node
// div.before(newBtn);

// node.after(el) //adds after node
// div.after(newBtn);

// Extra task
// let para = document.createElement("button");
// para.innerHTML = "click me";
// console.log(para);
// div.append(para);

// Extra task
// let newheading = document.createElement("h1");
// newheading.innerHTML = "Hi i am Dishant sangani";

// document.querySelector("body").prepend(newheading);

// Delete Element
// node.remove() // removes the node from its parent

// let para = document.querySelector("p");
// para.remove();

// newheading.remove()