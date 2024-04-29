"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorName = document.querySelector(".color");
const button = document.querySelector(".change-color");

const clickHandler = event => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
}

button.addEventListener("click", clickHandler);