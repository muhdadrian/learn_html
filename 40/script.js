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
c.arc(550, 200, 150, 0, 2 * Math.PI); //2nd step to reposition the circle
c.fill();
c.stroke(); //1st step to before positioning the cirle to the right side

//to make path (triangle)
c.fillStyle = "lightblue";
c.beginPath();
c.moveTo(900, 50);
c.lineTo(1050, 350);
c.lineTo(750, 350);
//c.lineTo(900, 50); Or we can directly close by using:
c.closePath();
c.fill();
c.stroke();

//to animate the objects above go to 41
