//1. 6개의 난수를 구하고 중복체크
let lotto = [];  // [1] 로또 번호를 저장할 배열

//첫번째 for문 : 로또 번호를 총 6개 생성하려고 0부터 5까지 반복(즉, 6번 반복)
for (let i = 0; i <= 5; i++) { //i :  로또 번호를 뽑는 횟수를 세는 인덱스
    let ran = Math.random() * 45; // [2] 0 <= ran < 45

    //1이상 ~45이하
    ran = Math.floor(ran) + 1; /// [3] 1 <= ran <= 45 (Math의floor함수 :소수점이 있으면 버리고, 정수 부분만 남겨요.)
    lotto.push(ran);   // [4] lotto배열에 ran 삽입
    console.log(lotto); // [5] lotto 배열 출력


    // 두번째 for문 : 지금 생성한 번호가 기존에 생성한 번호들과 중복되는지 확인
    //lotto[i] (현재 번호)와 lotto[0] ~ lotto[i-1] (기존 번호들)을 비교
    for (let j = 0; j < i; j++) { // 핵심 :j는 i, 즉 5를 넘으면 안되서 j는 아이보다 작다로설정!
        //i :  로또 번호를 뽑는 횟수를 세는 인덱스
        if (lotto[j] == lotto[i]) {//배열의 j번째 값과 i번째 값이 같은 숫자인지 비교하는 것
            lotto.pop(); //pop()함수:  배열의 마지막 요소를 무조건 제거하는 메서드
            i--; // 중복되는 숫자가 있으면 한 번 더 뽑아야 하니까 i를 뒤로 한 칸 물리는 것
            break // 중복되는 숫자가 발생되면 중단하고, 다시 첫번째로 이동해서 번호 다시 뽑기 
        }
    }

}

//2. 정렬.
//sort()함수: 배열의 요소를 정렬
lotto.sort((a, b) => { // 오름차순(작은 숫자-> 큰 숫자)
    return a - b;
});
console.log(lotto);


//3. 출력 console.log(lotto)
//let divList = document.querySelector('div.wrap').children;
let divList = document.querySelectorAll('div.wrap>div'); //div.wrap 요소의 직속 자식 div들만 선택.
//console.log(divList);

//divList 배열을 돌면서 각 요소(element)와 그 인덱스(idx)를 꺼냄
divList.forEach((element, idx) => {
    element.innerText = lotto[idx]; //아래 10 ~60 innerText에 랜덤 번호가 들어감.
});

/* 
    <div class="wrap">
    <div>10</div>
    <div>20</div>
    <div>30</div>
    <div>40</div>
    <div>50</div>
    <div>60</div>
</div> 
*/