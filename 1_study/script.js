const mycanvas = document.querySelector("#mycanvas");

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext("2d");

c.fillStyle = "pink";
c.strokeStyle = "#999";
c.lineWidth = "5";

c.rect(50, 50, 300, 300);

c.fill();
c.stroke();

c.fillStyle = "lightgreen";
c.beginPath();
c.arc(550, 200, 150, 0, 2 * Math.PI);
c.fill();
c.stroke();

c.fillStyle = "lightblue";
c.beginPath();
c.moveTo(900, 50);
c.lineTo(1050, 350);
c.lineTo(750, 350);

c.closePath();
c.fill();
c.stroke();
