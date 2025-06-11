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

console.log('=========================')
// 부모위치 ???//
let divNode = document.getElementsByTagName('div')[0];
console.log(divNode); //DOM 요소 자체를 출력
console.log(divNode.innerText); // content1  content3 (화면에 보이는 텍스트만 반환 (숨김 제외))
console.log(divNode.textContent); // content1 content2 content3 content4 (모든 텍스트 노드 반환 (숨김 포함))
console.log(divNode.innerHTML); //(	내부의 HTML 코드(태그 포함) 반환)
//  <p style="background-color: blue;">content1</p>
//   <p style="display: none">content2</p>
//   <p>content3</p>
//   <p style="display: none">content4</p>

console.log('=========================')

let hId = document.querySelector("#selector");
console.log(hId);// <h1 id="selector" class="choice">선택자</h1>

let hdata = document.querySelector(".choice");
console.log(hdata); // <h1 id="selector" class="choice">선택자</h1>

let pList = document.querySelector("p");
console.log(pList); // <p style=​"background-color:​ blue;​">​content1​</p>

let pList2 = document.querySelectorAll("p");
console.log(pList2); //(4) [p, p, p, p]

function process() {
    //alert('click');
    let fname = document.frm.fname;
    console.log(fname, typeof fname);
    console.log(fname.value);
    console.log(fname.defaultValue);
    return false;
}