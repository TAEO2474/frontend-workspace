//주제:  JavaScript에서 this 키워드와 함수 호출 방식(call, apply, bind), 그리고 화살표 함수와 일반 함수에서의 this 차이
//  this는 '현재 실행되고 있는 함수가 속한 객체' 이다
// 쉽게 말해, 함수가 '누구에 의해 호출되었는지'에 따라 달라지는 객체라고 생각하면 돼요.

//호출한 객체가 없을 경우에는 기본적으로 Window 객체이다.
console.log(this);  //Window

///////////////////////////////////////////////////////////
//1. 일반 함수에서의 this
let member = {
    name: '홍길동',
    show: function () {
        console.log(this);//Object ▶ : {name: "홍길동", show: ƒ} 는 객체 리터럴 구조를 보여줍니다.
    }
}
member.show(); // show() 메소드 호출

///////////////////////////////////////////////////
//2. 화살표 함수에서의 this
let member2 = {
    name: '홍길동',
    show: () => {
        console.log(this); // Window  (잘못된 경로)
    }
}
member2.show();

////////////////////////////////////////////////..

let member3 = {
    name: '홍길동',
    show: () => { //화살표 함수
        console.log(this); // window 
    }
}
member3.show();
/////////////////////////////////////////////
// 일반함수
function showThisName() {
    console.log(this);//Window
}

showThisName();
// 일반 함수가 "특정 객체의 메소드로서 호출되지 않고" 그냥 독립적으로 호출되면,
// 그 함수 안에서의 this는 브라우저 환경에서는 window 객체를 가리킵니다.
////////////////////////////////////////////////////////////
// 화살표 함수
let showThisName2 = () => {
    console.log(this);//Window
}
showThisName2();// 함수 밖에 위치 (전역스코프)일 경우, thissms  Window 객체를 가리킴. 
/////////////////////////////////////////////////////
//이벤트에서 this
// <button id="btn">commit</button>
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    console.log(this);
}, false);

// addEventListener : 이벤트가 발생했을 때 어떤 동작을 할지" 지정해주는 함수

btn.addEventListener('click', () => {
    console.log(this);//Window
}, false);

///////////////////////////////////////////////
const hong = { name: '홍길동' };
const jung = { name: '정혜인' };

//calll()
console.log('call()==================================')
//일반함수
showThisName.call(hong); // { name: '홍길동' }
showThisName.call(jung);// { name: '정해인' }

// 화살표함수
showThisName2.call(hong); // Window 
showThisName2.call(jung);// Window

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
    console.log(this);
}

update(2019, 'IT'); // this => Window

// update.call(this의 대상객체, argument, argument)
update.call(hong, 2000, '프로그래머');//{name:'정해인, birthyear :2000, job:'프로그래머'}
update.call(jung, 2016, '디자이너');
//////////////////////////////////////////////////////////////////////
//apply()
// 1. 함수 매개변수를 처리하는  방법을 제외하면 call()과 같다.
// 2. call()은 일반적인 함수와 마찬가지로  매개변수로 직접 받지만, apply()는 매개변수를 배열로 받는다

update.apply(hong, [2000, '프로그래머']);///{name:'정해인, birthyear :2000, job:'프로그래머'}
update.apply(jung, [2016, '디자이너']);

/////////////////////////////////////////////////////////////////
//bind()
//1. call()과 사용방법은 같으나 실행을 해야한다.

let hongUpadate = update.bind(hong, 2000, '프로그래머');
hongUpadate();
update.bind(hong, 2000, '프로그래머')();

let jungUpadate = update.bind(hong, 2000, '프로그래머');
jungUpadate();
update.bind(jung, 2016, '디자이너')();
