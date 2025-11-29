const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

let x = 300;
let y = 200;
let speedX = 5;
let speedY = 5;
let radius = 150;

function draw() {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  console.log("ok");
  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speedX = -speedX;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    speedY = -speedY;
  }
  x += speedX;
  y += speedY;
}

draw();
