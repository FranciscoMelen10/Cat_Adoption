"use strict"
import { removeDonation } from "../api/donation.js";
import { removeUser } from "../api/user.js";

const Btn = document.querySelector(".Btn");

Btn.addEventListener("click", () => {
    alert("¡Gracias por tu donación!");
    removeDonation();
    removeUser();
    window.location.href = "/";
});