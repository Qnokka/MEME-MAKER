const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
//canvas의 size를 알려주는 구문

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50)
ctx.fill();

