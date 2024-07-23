const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

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
function onModeClick(event) {
  if(isFilling) {
    isFilling = false;
    modeBtn.innerText = "🪣 Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "✏️ Draw";
  }
}
function onCanvasClick(event) {
  if(isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
function onDestroyClick(event) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick(event) {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "🪣 Fill";
}
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  //그 파일을 가리키는 URL을 요청
  const image = new Image();
  image.src = url;
  image.onload = function() {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //이미지가 로딩되면 캔버스에 이미지를 그리는 동작 수행
    fileInput.value = null;
  }
}
function onDoubleClick(event) {
  const text = textInput.value;
  if(text !== "") {
    ctx.save(); //현재 상태, 색상, 스타일 등 모든 것을 저장함
    ctx.lineWidth = 1;
    ctx.font = "68px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore(); //이전에 저장한 상태로 되돌아감
    //즉, 해당 구간 내에서는 어떠한 수정을 하던 저장되지 않음
  }
}
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.onmousemove = function() {}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener
("click", onColorClick));
//colorOptions는 HTMLCollection => ArrayLike객체며, 이는 Array가 아님
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);