
/*
[문서 객체에 이벤트를 적용하는 방법]
요소선택.이벤트종류 = function(){실행할 문장};
btn.onclick=process;
function process(){};
*/

let chk = true;
let divNode = document.querySelector('div');
function process() {
    // let divNode = document.querySelector('div'); 여기에 두면 계속 불필요한 작업이 반복됨
    if (chk) {
        divNode.style.backgroundColor = 'blue';
        chk = false;
    } else {
        divNode.style.backgroundColor = 'red';
        chk = true;
    }

}

let btn = document.querySelector('button');
console.log(btn); //<button>change</button>
// button에서 클릭이벤트가 발생하나면 process함수를 실행하도록 등록하다.  
btn.onclick = process;