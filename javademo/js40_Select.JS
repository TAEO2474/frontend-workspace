document.frm.onsubmit = () => {
    let optFruit = document.frm.fruit;
    console.log(optFruit);

    let optSelect = optFruit.selectedIndex + '   ' + optFruit.value;
    console.log(optSelect);
    return false; // 질문 flase 왜 붙인지?

}