const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]


let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string


console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

////////////////////////////////////////////////////////////////////////

//배열의 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push("Melon")); //6
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]


//배열의  끝에 요소를 제거 (이때 메모리에서 완전제거)
console.log(fruits.pop()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//배열의 앞에 요소를 추가
console.log(fruits.unshift("Melon")); //6
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//배열의 앞에 요소를 제거
console.log(fruits.shift()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//특정 위치의 요소 제거(자리는 확보하고 있음)
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]


fruits[3] = "Mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// slice(1) 지정되면 전체 출력 
console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// 오름차순 정렬
console.log(fruits.sort());// ['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']
console.log(fruits);//['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']

// 내림차순 정렬
console.log(fruits.sort().reverse());//['Orange', 'Mango', 'Kiwi', 'Banana', 'Apple']

//오름차순
let point = [40, 100, 1, 5, 10];
console.log(point.sort());//[1, 10, 100, 40, 5]

const asc = point.sort(function (a, b) {
    console.log(`a:${a},b:${b},a-b:${a - b}`);
    return a - b;
});

console.log(asc);//[1, 5, 10, 40, 100]

//내림차순
const desc = point.sort(function (a, b) {

    console.log(`a:${a},b:${b},b-a:${b - a}`);
    return b - a;
});
console.log(desc);//[100, 40, 10, 5, 1]

let xData = [1, 2, 3];
let yData = [1, 2, 3];
let zData = xData.concat(yData, [7, 8, 9,]);
console.log(zData.length);//9
console.log(zData);

let arr2 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr2.length); //5  [1, 2, 3, 1, 2, 3, 7, 8, 9]
console.log(arr2);// (5)[1, 3, Array(1), Array(2), Array(2)]
console.log(arr2.flat(1));//(7) [1, 3, Array(1), 7, 8, Array(2), 12]
console.log(arr2.flat(2)); //(8)[1, 3, Array(2), 7, 8, 9, 10, 12]
console.log(arr2.flat(3)); //(9)[1, 3, 4, 5, 7, 8, 9, 10, 12]