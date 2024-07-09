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
    "#00a8ff"/*,"#8c7ae6","#fbc531",
    "#44bd32","#40739e","#e84118",
    "#7f8fa6","#273c75","#2f3640"*/
]

const newColors = [
    "#ff9ff3"/*, "#feca57", "#ff6b6b",
    "#ff9f43", "#00d2d3", "#c8d6e5",
    "#badc58", "#686de0", "#7ed6df"*/
]

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(canvas_x, canvas_y);
    const color = colors[Math.floor(Math.random() *colors.length)];
    ctx.strokeStyle = color;
    currentColor = ctx.strokeStyle;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function changeColor(event) { //색상을 변경하기 위한 함수

    ctx.beginPath();
    ctx.moveTo(canvas_x, canvas_y);
    const color = newColors[Math.floor(Math.random() * newColors.length)];
    ctx.strokeStyle = color;
    currentColor = ctx.strokeStyle;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    // Change mousemove event listener
    if (colors.includes(currentColor)) { //현재 색상 값 조건
        canvas.removeEventListener("mousemove", changeColor);
        canvas.addEventListener("mousemove", onClick);
    } else {
        canvas.removeEventListener("mousemove", onClick);
        canvas.addEventListener("mousemove", changeColor);
    }
}

canvas.addEventListener("mousemove", onClick)
canvas.addEventListener("click", changeColor)


