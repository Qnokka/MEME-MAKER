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

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);