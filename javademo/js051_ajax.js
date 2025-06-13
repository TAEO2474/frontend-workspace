//AJAX = Asynchronous  Javascript And XML


/*
 1. XMLHttpRequest 객체 생성한다.
 2. 서버와 통신할 때 사용할 처리 방법을 등록한다.
 3. 요청을 전송하고 통신을 시작한다.
*/

function process() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();


    //onload메서드는 요청이 성공한다는 전제하에 실행되는이벤트 핸들러
    //readystatechange이벤트 대신 -> onload 이벤트를 사용해도 됨
    xhttp.onload = () => {
        if (xhttp.status == 200) {// 서버-> 클라이언트로 정상적인 응답을 받은 코드명 200
            //{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
            let data = JSON.parse(xhttp.response); // 가져온 xhttp.response 문장열을  JSO으로 변경
            console.log(data);
        }
    };
}


console.log("start");
process();
console.log("end");


