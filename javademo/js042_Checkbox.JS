//약관 동의

document.frm.onsubmit = () => {
    let admin = document.frm.admin;
    if (!admin.checked) {
        alert('약관에 동의해야 합니다'); //alert는 웹 브라우저 화면에 알림 창을 띄우는 함수
        return false;
    }
}

// 전체선택
//document.frm.allCheck.onclick = function () {
document.frm.allCheck.onclick = function () {
    // console.log(this);
    // document.frm.subject1.checked = this.checked;
    // document.frm.subject2.checked = this.checked;
    // document.frm.subject3.checked = this.checked;

    ///forEach(): 배열(array) 안에 있는 값들을 하나씩 꺼내서 어떤 동작을 반복//////////////
    // let checkgroup = document.querySelectorAll('.checkgroup');
    // console.log(checkgroup); //NodeList(3) [input#subject1.checkgroup, input#subject2.checkgroup, input#subject3.checkgroup]

    // let myThis = this;// this는 전체선택 
    // checkgroup.forEach((element) => {
    //     element.checked = myThis.checked;
    // });

    ///map() :열 안에 있는 모든 요소에 대해 하나씩 작업을 반복 기능//////////////////////
    let myThis = this;
    let checkgroup = document.querySelectorAll(`.checkgroup`);
    //checkedgroupDMS Nodelistdlamfh map을 사용할 수 없다.
    //Array.from()을 이용해서 NodeListfmf Array로 생성한다
    // let myArray = Array.from(checkgroup);
    // myArray.map((element) => {
    //     element.checked = myThis.checked;
    // });

    let iArray = [...checkgroup];
    iArray.map((element) => {
        return element.checked = myThis.checked;
    });

}
