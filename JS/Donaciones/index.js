"use strict";
import { addDonation } from "../api/donation.js";
import { validateEmail, validateName, validatePhone } from "../utils.js";

// Obtenemos los valores de los elementos del DOM del formulario
const nombre = document.querySelector(".input_name");
const email = document.querySelector(".input_email");
const phone = document.querySelector(".input_phone");
const address = document.querySelector(".input_address");
const gender = document.querySelector(".input_gender");
const nacionality = document.querySelector(".input_nacionality");
const btn_submit = document.querySelector(".btn_submit");

btn_submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir envío predeterminado

  // Validamos que los campos no estén vacíos
  if (
    nombre.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    address.value === "" ||
    gender.value === "" ||
    nacionality.value === ""
  ) {
    alert("Asegurese de llenar todos los campos");
    return;
  }

  // Validamos que el email sea válido
  if (!validateEmail(email.value)) {
    alert("Correo inválido, asegurese de que sea un correo válido");
    return;
  }

  // Validamos que el nombre sea válido
  if (!validateName(nombre.value)) {
    alert("Nombre inválido, asegurese de que sea un nombre válido");
    return;
  }

  // Validamos que el teléfono sea válido
  if (!validatePhone(phone.value)) {
    alert("Teléfono inválido, asegurese de que sea un teléfono válido");
    return;
  }

  // Agregamos la donación al localStorage
  if (
    addDonation(
      nombre.value,
      email.value,
      phone.value,
      address.value,
      nacionality.value,
      gender.value
    )
  ) {
    window.location.href = "./home.html";
  }
});
