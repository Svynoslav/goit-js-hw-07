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

  amount = input.value;
  const boxes = [];
  let size = 30;

  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }
    boxes.forEach(box => boxContainer.append(box));
  }

  input.value = "";
}
const destroyBoxes = event => {
  boxes.innerHTML = "";
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);