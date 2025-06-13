let basket = {
    totalCount: 0,
    totalPrice: 0,

    // 체크한 장바구니 상품 비우기
    // 선태상품삭제
    delCheckedItem: function () {
        document.querySelectorAll("input[name=buy]:checked").forEach(function (item) {
            item.parentElement.parentElement.parentElement.remove();

        });
        // 전송처리 결과가 성공하면
        this.reCalc();
        this.updateUi();
        this.reCalc();
        this.updateUi();
    },
    // 장바구니 전체 비우기
    delAllItem: function () {
        document.querySelectorAll(".row.data").forEach(function (item) {
            item.remove();
        });
    },

    //재계산
    reCalc: function () {
        this.totalCount = 0;
        this.totalPrice = 0;
        document.querySelectorAll(".p_num").forEach(function (item) {
            let count = parseInt(item.getAttribute("value"));
            this.totalCount += count;
            let price = item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("value");

            price = parseInt(price);
            this.totalPrice += count * price;
        }, this); // forEach 2번째 파라미터롤 객체를 넘겨서 this가 객체 리터널을 가리키도록 함.
    },

    // 화면 업데이트
    updateUi: function () {
        document.querySelector('#sum_p_num').textContent =
            '상품갯수' + this.totalCount.formatNumber() + '개';

        document.querySelector('#sum_p_price').textContent =
            '합계급액' + this.totalPrice.formatNumber() + '원';
    },
    // 개별 수량변경
    changePNum: function (pos) {
        let item = document.querySelector('input[name=p_num' + pos + ']');
        let p_num = parseInt(item.getAttribute('value'));
        let newval = event.target.classList.contains('up') ? p_num + 1 : event.target.classList.contains('down') ? p_num - 1 : event.target.value;
        //console.log(newval); 콘솔에 변경되는지 잠깐 확인용

        //상품갯수가 1보다 작거나 99보다 크면안됨. 
        if (parseInt(newval) < 1 || parseInt(newval) > 99) { return false; }
        item.setAttribute("value", newval);

        let price = item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("value");
        item.parentElement.parentElement.nextElementSibling.textContent = (newval * price).formatNumber() + "원";
        //Ajax 업데이트 전송
        //웹 페이지에서 서버와 데이터를 주고받을 때 페이지 전체를 새로 고침하지 않고 필요한 부분만 비동기적으로 갱신할 수 있게 해주는 기술

        // 전송결과 처리가 성공이면 
        this.reCalc();  // 장바구니 합계 금액과 상품 개수 다시 계산
        this.updateUi();// 계산된 정보를 UI에 다시 반영
    },

    // 삭제버튼이 있는  행 상품삭제
    delItem: function () {
        event.target.parentElement.parentElement.parentElement.remove();
        // 전송결과 처리가 성공이면 
        this.reCalc();  // 장바구니 합계 금액과 상품 개수 다시 계산
        this.updateUi();// 계산된 정보를 UI에 다시 반영
    }
} //emd basket

// 숫자 3자리 콤마찍기
Number.prototype.formatNumber = function () {
    if (this == 0) return 0; // 여기서 this가 의미는? formatNumber()메소드를 호츌하는 Number 객체 자체를 의미한다(즉 숫자이다)
    console.log("this:" + this);

    //3자리마다 콤마를 찍기 위한 정규식
    // (^[+-]?\d+) : 문자열 시작부터 + 또는 -가 없거나 1개 있을 수 있고, 숫자가 1개이상  나오는 그룹
    // (\d{ 3 })/  : 숫자 3자리 그룹2
    let regex = /(^[+-]?\d+) (\d{3})/;

    // 숫자를 문자열로 변경 (문자열이 되어야 정규식을 적용할 수 있기 때문이다)
    let nstr = (this + ''); // this : 숫자 '' :문자

    // 정규식에 매칭될때마다 (즉, 3자리마다 콤마를 찍어야 할 때마다)
    while (regex.test(nstr)) {
        // 첫번째 그룹 + ',' + 두번째 그룹으로 문자열 바꿔서 3자리마다 콤마를 추가한다.
        nstr = nstr.replace(regex, '$1' + ',' + '$2');
    }
    //최종 콤마가 찍힌 문자영을 반환한다
    return nstr;
}