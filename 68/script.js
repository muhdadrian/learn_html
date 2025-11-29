const title = document.querySelector("h1");

let name = localStorage.getItem("name");
if (!name) {
  name = prompt("Enter your name: ");
  localStorage.setItem("name", name);
}

title.innerHTML = `Hello, ${name}!`;

//To replace name
const replaceName = (e) => {
  name = prompt("Enter your new name: ");
  localStorage.setItem("name", name);
  //if you use link and does not want it to move to anywhere (to its href), use prevent default by adding e parameter first at above (e)
  e.preventDefault();
};
