let hNode = document.getElementById("selector");
console.log(hNode);//h1#selector.choice
console.log(typeof hNode);//object

let hClass = document.getElementsByClassName("choice");
console.log(hClass);
console.log(typeof hClass);

let pNode = document.getElementsByTagName("p");
console.log(pNode);
console.log(pNode.length);

console.log(pNode[0]); //p
console.log(pNode.item(0));
console.log(pNode[0].innerText); //content1
console.log(pNode[1].innerText); //content2
console.log(pNode[0].textContent); //content1
console.log(pNode[1].textContent); //content2

pNode[0].style.backgroundColor = "blue";

////////////////////////////////////////////////
let hId = document.querySelector("#selector");
console.log(hId);// <h1 id="selector" class="choice">선택자</h1>

let hdata = document.querySelector(".choice");
console.log(hdata); // <h1 id="selector" class="choice">선택자</h1>

let pList = document.querySelector("p");
console.log(pList); // <p style=​"background-color:​ blue;​">​content1​</p>

let pList2 = document.querySelectorAll("p");
console.log(pList2); //(4) [p, p, p, p]