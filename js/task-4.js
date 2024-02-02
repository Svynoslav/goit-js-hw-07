"use strict";

const form = document.querySelector("form")

function submitHandler(event) {
    event.preventDefault();

    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    const values = {
        email: login.trim(),
        password: password.trim(),
    }

    console.log(values);
    form.reset();
}

form.addEventListener("submit", submitHandler);

