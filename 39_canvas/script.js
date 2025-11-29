//prepare the canvas
//can use getElementById or querySelector (use # if using querySelector)
const mycanvas = document.querySelector("#mycanvas");

//set the canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//set the context
const c = mycanvas.getContext("2d");

//manipulate the canvas

//make the rectangle
c.fillStyle = "pink";
c.strokeStyle = "#999";
c.lineWidth = "5";

c.rect(50, 50, 300, 300);
//to display the box
c.fill();
c.stroke();

//to make cirle
c.fillStyle = "lightgreen";
c.beginPath();
c.arc(50, 50, 150, 0, 2 * Math.PI);
c.fill();

//to position the circle at the right side of pink box go to 40
