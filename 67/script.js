//session storage

const title = document.querySelector("h1");

let name = sessionStorage.getItem("name");
if (!name) {
  name = prompt("Enter your name: ");
  sessionStorage.setItem("name", name);
}

title.innerHTML = `Hello, ${name}!`;
