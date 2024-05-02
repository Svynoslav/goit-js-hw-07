"use strict";

const boxContainer = document.querySelector("#boxes");
const input = document.querySelector("input");
const create = document.querySelector('[data-create=""]');
const destroy = document.querySelector('[data-destroy=""]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxContainer.innerHTML = "";

  let size = 30;
  let boxesHTML = [];

  if (amount >= 1 && amount <= 100) {
    for(let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      const boxHTML = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>` ;
      boxesHTML.push(boxHTML);
      size += 10;
    }
    boxContainer.insertAdjacentHTML("beforeend", boxesHTML.join(""));
  }

  input.value = "";
}
const destroyBoxes = event => {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => createBoxes(Number(input.value)));
destroy.addEventListener("click", destroyBoxes);

