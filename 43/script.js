const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

let x = 300;

function draw() {
  window.requestAnimationFrame(draw);
  c.clearRect(0, 0, innerWidth, innerHeight);
  console.log("ok");
  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(x, 200, 150, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  //x++;
  x += 5; //to make it faster
}

draw();

//to bounce back the circle. Go to 44
