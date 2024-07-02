const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
//canvas의 size를 알려주는 구문

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 4;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);

// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

//연습 : 사다리꼴 지붕 그려보기
function paintedRect(color) {
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}; //공통적으로 사용되는 구문

ctx.beginPath(); //기둥
ctx.rect(500, 300, 50, 100);
ctx.rect(700, 300, 50, 100);
paintedRect("skyblue");

ctx.beginPath();
ctx.rect(550, 300, 150, 100);
paintedRect("beige");

ctx.beginPath(); //대문
ctx.rect(590, 350, 35, 50);
ctx.rect(625, 350, 35, 50);
paintedRect("green");

ctx.beginPath(); //지붕
ctx.moveTo(475, 300); //-25
ctx.lineTo(565, 200); 
ctx.lineTo(675, 200);
ctx.lineTo(775, 300); //+25
ctx.lineTo(475, 300);
paintedRect("tomato");
