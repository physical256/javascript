//const test = document.querySelector("#head")
//console.log (test)
//console.log (test.innerHTML)

//const tekst = document.querySelector(".header")
//console.log (test)
//console.log (test.innerHTML)

//const test =document.querySelector("h1")
//console.log (test);

//const test = document.querySelector("#header")
//console.log(test.innerHTML)
//test.innerHTML="nowa treść nagłówka"

let newElement = document.createElement("h2");
newElement.textContent="Krystian"
document.body.appendChild(newElement);

//let akapit = document.createElement("p");
//let content=document.createTextNode("nowy akapit");
//akapit.appendChild(content);
//let position=document.querySelector("#div1")
//let before = document.querySelector ("#p1")
//position.insertBefore (akapit,before)


let akapit = document.createElement("p");
let content=document.createTextNode("nowy akapit");
akapit.appendChild(content);
let parent=document.querySelector("#div1")
let child=document.querySelector ("#p1")
parent.replaceChild (akapit,child)