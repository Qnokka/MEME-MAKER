const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");
const canvasSetWidth = canvas.width = 800;
const canvasSetHeight = canvas.height = 800;
//canvas의 size를 알려주는 구문

ctx.lineWidth = 2;

const colors = [
    "#00a8ff","#8c7ae6","#fbc531",
    "#44bd32","#40739e","#e84118",
    "#7f8fa6","#273c75","#2f3640"
]

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(800, 800);
    const color = colors[Math.floor(Math.random() *colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick)




