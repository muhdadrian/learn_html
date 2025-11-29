const title = document.querySelector("h1");

let name = localStorage.getItem("name");
if (!name) {
  name = prompt("Enter your name: ");
  localStorage.setItem("name", name);
}

title.innerHTML = `Hello, ${name}!`;
