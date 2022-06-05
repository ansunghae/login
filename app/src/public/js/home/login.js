"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req)
}