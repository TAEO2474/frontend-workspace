//  <input type="submit" value="login" /> 부분 설정
//  < button value = "login" > login</ >
//  <input id="imgB" type="image" SRC="images/signin.gif" />

// 위의 3개의 form요소 안에서 작성하면 form에서 submit 이벤트가 발생한다.
let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');
//document.log_f.onsubmit = function ()
document.log_f.onsubmit = () => {
    if (idNode.value == "") {
        alert('아이디를 입력하세요');
        return false;
    }

    if (passNode.value == "") {
        alert('비밀번호를 입력하세요');
        return false;
    }

    return true;

};