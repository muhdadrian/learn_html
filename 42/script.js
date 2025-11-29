const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

let x = 300;

function draw() {
  window.requestAnimationFrame(draw);
  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(x, 200, 150, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  x++;
}

draw();

//we need to clear the black shadow when the circle is moving to the right. Go to 43
