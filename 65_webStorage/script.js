let name = prompt("Enter your name: ");

const title = document.querySelector("h1");

localStorage.setItem("name", name); //'name'(key), Adrian(value)
title.innerHTML = `Hello, ${name}!`;

//for better code go to 66
