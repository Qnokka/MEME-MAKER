const canvas = document.querySelector("canvas");
//canvas element에 접근하기 위한 상수 선언
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
//canvas의 size를 알려주는 구문

//ctx.fillRect(50, 50, 100, 200); //단축함수
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill(); 

ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
setTimeout(() => {ctx.fill();}, 5000);

