const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

function draw() {
  window.requestAnimationFrame(draw); //draw is callback parameter. You write draw, animate etc
  console.log("ok");
  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(300, 200, 150, 0, 2 * Math.PI); //change the x so that it moves to the right. Go to 42
  c.fill();
  c.stroke();
}

draw();
