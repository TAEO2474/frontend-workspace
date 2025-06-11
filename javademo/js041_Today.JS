let dateBtnNode = document.querySelector('button');
let pNode = document.querySelector('p');

dateBtnNode.onclick = () => {
    let toaday = new Date();
    let year = toaday.getFullYear();
    let month = toaday.getMonth() + 1;
    let date = toaday.getDate();

    let hour = toaday.getHours();
    let minute = toaday.getMinutes();
    let second = toaday.getSeconds();

    pNode.innerText = `${year}-${month}-${date}  ${hour}:${minute}:${second}`;
}