//Spread Operator (= 스프레드 연산자 = 전개연산자 = 펼침연산자)
// 형태 : (....매개변수)

//////////////////////////////////
// [1] 배열에성의 Spread Operator

// 1. 배열 복사 (Array Copy)
let arr1 = [1, 2, 4];
let arr2 = arr1; // Shallow Copy (얇은 복사) 
console.log(`arr1:${arr1}`);
console.log(`arr1:${arr2}`);
// console.log(arr1);

arr2.push(4);
console.log(`arr1:${arr1}`);
console.log(`arr2:${arr2}`);

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // Deep Copy (깊은 복사)
console.log(`arr3:${arr4}`);
console.log(`arr3:${arr4}`);

arr4.push(4);
console.log(`arr3:${arr4}`);
console.log(`arr3:${arr4}`);

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5);

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr6);//(3) [5, 6, Array(2)]
console.log(arr7); // (4)[1, 5, 6, Array(2)]

arr6[0] = 20;
arr6[2][0] = 10;
console.log(arr6);//(3) [20, 6, Array(2)]
console.log(arr7);//(4) [1, 5, 6, Array(2)]


// 2. 배열 병합(Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); //[  1, 2, 3, 4, 5,  6, 7, 8, 9]

//////////////////////////////////////////////////////////
//[2] 함수에서의  Spread Operator
//1. Rest Parameter(나머지 매개변수)
function display(...params) {
    return params.reduce((sum, a) => {
        return sum + a;
    });
}

console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//2. 함수 호출 인수
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(...arr13)); //50

////////////////////////////////////////////////////////////
//[3] 객체에서 Spread Operator

// 1.객체복사
let prevState = { name: "태오윤", age: 30 };
// let currentState = prevState; // Shallow Copy
let currentStaterrentState = { ...prevState }; //Deep Copy
console.log(prevState);

currentState = { ...prevState, loc: "서울" };
console.log(currentState);

//2. 객체 업데이트
let prevState2 = { name: "고수", age: 31 };
console.log(prevState2);

prevState2.name = "여진구";
console.log(prevState2);

prevState2 = { ...prevState2, age: 40 };
console.log(prevState2);