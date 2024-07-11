const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(event) {
    if (isPainting) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color 
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;   //사용자에게 컬러 변경 여부를 알림
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener
("click", onColorClick));
//colorOptions는 HTMLCollection => ArrayLike객체며, 이는 Array가 아님