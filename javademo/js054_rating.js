//.addEventListener () 메서드
// 이벤트를 감지하고 처리하기 위해 사용하는 메서드입니다.
// 어떤 HTML 요소에서 특정 이벤트(예: 클릭, 키보드 입력 등)가 발생했을 때 실행할 함수를 지정할 수 있어요.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".rating").addEventListener('click', function (e) {
        let elem = e.target;
        //console.log(elem); // 클릭된 요소 출력
        if (elem.classList.contains("rate_radio")) {
            rating.setRate(parseInt(elem.value));
        }
    });
});

// 저장 전송 전 필드 체크 이벤트리스너 (addEventListener 메서드 사용)
document.querySelector('#save').addEventListener('click', function () {
    // 별점을 선택하지 않으면 메시지 표시
    if (rating.rate == 0) {
        rating.showMessage("rate")
        return false;
    }

    // 리뷰 5자 미만이면 메세지 표시 
    if (document.querySelector(".review_textarea").value.length < 5) {
        rating.showMessage("review");
        return false;
    }
    // form submit 
    alert("저장완료!")
    rating.setRate(0);
    document.querySelector(".review_textarea").value = "";
});


// 별점 마킹 모듈 프로토타입으로 생성
function Rating() { }
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (newrate) {
    // 별점 마킹 - 클릭한 별 이하, 모든 별 체크 처리
    this.rate = newrate;
    let items = document.querySelectorAll(".rate_radio");
    items.forEach((item, idx) => {
        if (idx < newrate) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    });

};
Rating.prototype.showMessage = function (type) {
    //경고메세지 표시
    switch (type) {
        case "rate":
            //안내메세지 표시
            document.querySelector(".review_rating .warning_msg").style.display = "block";
            // 지정된 시간 후 안내 메세지를 감춤
            setTimeout(function () {
                document.querySelector(".review_rating .warning_msg").style.display = "none";
            }, 1000);


        case "review":
            // 안내메세지 표시
            document.querySelector(".review_contents .warning_msg").style.display = "block";
            // 지정된 시간 후 안내 메세지를 감춤
            setTimeout(function () {
                document.querySelector(".review_contents .warning_msg").style.display = "none";
            }, 1000);
            break;
    }
};

// 상품평 작성 글자수 초과 이벤트리스너 (addEventListener 메서드 사용)
//.review_textarea : 텍스트 입력란(textarea 등)에서 키보드 키를 누를 때마다 실행되는 이벤트 핸들러
// 입력한 내용이 400자 이상이면 입력 내용을 10자로 자르려고 시도하는 코드입니다.
document.querySelector(".review_textarea").addEventListener("keydown", function () {
    let review = document.querySelector(".review_textarea");
    let lengthCheckEx = /^.{400,}$/; // {400,} 최소 400글자 이상   // {400} 정확히 400글자 
    if (lengthCheckEx.test(review.value)) {

        review.value = review.value.substring(0, 400);
    }
});






let rating = new Rating(); // 별점 인스턴스(객체) 생성