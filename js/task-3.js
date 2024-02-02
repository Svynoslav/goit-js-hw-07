"use strict";

const input = document.querySelector("input");
const nameOutput = document.querySelector("span");

function inputHandler(event) {
    event.preventDefault();
    const inputText = event.target.value.trim();
    nameOutput.textContent = inputText === "" ? "Anonymous" : inputText;
}

input.addEventListener("input", inputHandler);
