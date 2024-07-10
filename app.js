const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");
const canvasSetWidth = canvas.width = 800;
const canvasSetHeight = canvas.height = 800;
//canvas의 size를 알려주는 구문
const canvas_x = Math.floor(Math.random() *canvasSetWidth);
const canvas_y = Math.floor(Math.random() *canvasSetHeight);
//랜덤으로 중심축 설정하기 위한 변수 선언
let currentColor = "";

ctx.lineWidth = 2;

const colors = [
    "#00a8ff","#8c7ae6","#fbc531",
    "#44bd32","#40739e","#e84118",
    "#7f8fa6","#273c75","#2f3640"
]

const newColors = [
    "#ff9ff3", "#feca57", "#ff6b6b",
    "#ff9f43", "#00d2d3", "#c8d6e5",
    "#badc58", "#686de0", "#7ed6df"
]


// 두 배열 중 하나를 랜덤으로 선택
const colorArray = Math.random() < 0.5 ? colors : newColors;
// 선택된 배열에서 랜덤으로 색상 선택
ctx.strokeStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
currentColor = ctx.strokeStyle;


function drawLine(event) {
    ctx.beginPath();
    ctx.moveTo(canvas_x, canvas_y); 
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function onClick(event) {
    if (colors.includes(currentColor)) { //현재 색상에 따른 색상 변경
        currentColor = newColors[Math.floor(Math.random() * newColors.length)];
    } else {
        currentColor = colors[Math.floor(Math.random() * colors.length)];
    }
    ctx.strokeStyle = currentColor;
}

canvas.addEventListener("mousemove", drawLine);
canvas.addEventListener("click", onClick);