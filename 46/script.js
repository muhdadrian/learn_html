const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

let x = 300;
let speed = 5;
let radius = 150;

function draw() {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  console.log("ok");
  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(x, 200, radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speed = -speed;
  }
  x += speed;
}
//x - radius: if you omit to write - radius, it will bounce from the center of the circle

draw();

//to bounce from top to the bottom go to 47
