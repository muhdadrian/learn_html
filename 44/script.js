const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

let x = 300;
let speed = 5;

function draw() {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  console.log("ok");
  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(x, 200, 150, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x > innerWidth) {
    speed = -speed;
  }
  x += speed;
}

draw();

//this will bounce from the center of the circle. To bounce after touching the wall go to 45
