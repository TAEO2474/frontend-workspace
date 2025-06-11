let btn = document.querySelector('button');

// btn.onclick = () => {
//     alert('click1');
// }
// btn.onclick = () => {
//     alert('click2');
// }

function click1() {
    alert('click1');
}

function click2() {
    alert('click2');
}

// btn.addEventListener('이벤트', 함수, 전파);
// 이벤트 전파=> true: capturing(부모-> 타켓요소), false :bubbling (타켓요소 -> 부모)
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);