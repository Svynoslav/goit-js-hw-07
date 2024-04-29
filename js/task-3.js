"use strict";

const input = document.querySelector("#name-input");
const greet = document.querySelector("#name-output");

const inputHandler = event => {
    event.preventDefault();
    const inputText = event.target.value.trim();
    greet.textContent = inputText === "" ? "Anonymous" : inputText;
}
input.addEventListener("input", inputHandler);