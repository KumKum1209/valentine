"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;
let buttonMoved = false; // Biến để kiểm tra xem nút đã được di chuyển hay chưa

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("mouseenter", function () {
    if (noCount >= MAX_IMAGES) {
        moveButtonRandomly();
    }
});

noButton.addEventListener("click", function () {
    if (noCount < MAX_IMAGES) {

        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            moveButtonRandomly();
        }
    }
    if (noCount === MAX_IMAGES) {
        moveButtonRandomly();
    }
    
        
});


//const buttonWidth = noButton.offsetWidth;
//const buttonHeight = noButton.offsetHeight;

// Danh sách các điểm để set vị trí cho nút
const positions = [
    { left: 100, top: -10 },
    { left: -100, top: -30 },
    { left: 105, top: -200 },
    { left: -750, top: -400 },    // Điểm ngẫu nhiên bên trái
    { left: -430, top: -150 },  // Điểm ngẫu nhiên bên phải
    { left: 20, top: -80 },    // Điểm ngẫu nhiên bên trái
    { left: -260, top: -250 },  // Điểm ngẫu nhiên bên phải
    { left: 120, top: -200 },  // Điểm ngẫu nhiên bên trái
    { left: -550, top: -30 },  // Điểm ngẫu nhiên bên phải
    { left: 380, top: -150 },   // Điểm ngẫu nhiên bên trái
    { left: -200, top: -20 },  // Điểm ngẫu nhiên bên phải
    { left: -180, top: -200 },  // Điểm ngẫu nhiên bên trái
    { left: 70, top: -50 },   // Điểm ngẫu nhiên bên phải
    { left: 30, top: -250 },   // Điểm ngẫu nhiên bên trái
    { left: -680, top: -180 },  // Điểm ngẫu nhiên bên phải
    { left: -350, top: -120 },  // Điểm ngẫu nhiên bên trái
    { left: 40, top: -20 },  // Điểm ngẫu nhiên bên phải
    { left: -270, top: -10 },    // Điểm ngẫu nhiên bên trái
    { left: 210, top: -270 },  // Điểm ngẫu nhiên bên phải
    { left:  -220, top: -230 },  // Điểm ngẫu nhiên bên trái
    { left: 100, top: -400 },  // Điểm ngẫu nhiên bên phải
    // Thêm các điểm khác nếu cần
];


let currentPosition = { left: 0, top: 0 }; // Biến để lưu trữ vị trí hiện tại của nút

function moveButtonRandomly() {
    let newPosition;

    // Lặp cho đến khi vị trí mới được sinh ra không trùng với vị trí hiện tại
    do {
        // Sinh số ngẫu nhiên để chọn một trong các điểm trong danh sách
        const randomIndex = Math.floor(Math.random() * positions.length);
        newPosition = positions[randomIndex];
    } while (newPosition.left === currentPosition.left && newPosition.top === currentPosition.top);

    // Lưu trữ vị trí mới vào biến currentPosition
    currentPosition = newPosition;

    // Lấy vị trí mới từ danh sách các điểm
    const newLeft = newPosition.left;
    const newTop = newPosition.top;

    // Đặt vị trí mới cho nút
    noButton.style.left = newLeft + "px";
    noButton.style.top = newTop + "px";
}




function handleYesClick() {
    titleElement.innerHTML = "Yayyy!! T biết c đi chơi với t mà <333 :)))";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}
//function handleNoClick() {
   
//        moveButtonRandomly();
    
//}
function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "Không",
        "Nài đừng không chứ ",
        "Ơ kìa, nút xanh cơ mà :>",
        "Hiểu ròi, c quên t ròi -.-",
        "C chê t chứ zề T.T",
        "Haizz c tệ @_@",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}
