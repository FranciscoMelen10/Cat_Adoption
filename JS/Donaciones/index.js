"use strict";
import { addDonation } from "../api/donation.js";
import { showToastSuccess, showToastWarning } from "../Toast.js";
import {
  validateEmail,
  validateMonto,
  validateName,
  validatePhone,
} from "../utils.js";

// Obtenemos los valores de los elementos del DOM del formulario
const nombre = document.querySelector(".input_name");
const email = document.querySelector(".input_email");
const phone = document.querySelector(".input_phone");
const address = document.querySelector(".input_address");
const gender = document.querySelector(".input_gender");
const nacionality = document.querySelector(".input_nacionality");
const monto = document.querySelector(".input_cash");
const btn_submit = document.querySelector(".btn_submit");

// Logica para seleccionar la mascota
const galeria = document.querySelector(".galeria_mascotas");
const mascota_seleccionada = document.getElementById("selectedPet");
const mascotas = document.querySelectorAll(".mascota");

galeria.addEventListener("click", (event) => {
  const mascota = event.target.closest(".mascota");
  if (!mascota) return;

  // Quitar la clase 'selected' de todas las mascotas
  mascotas.forEach((m) => m.classList.remove("selected"));

  // Agregar la clase 'selected' a la mascota seleccionada
  mascota.classList.add("selected");

  // Actualizar el valor del input oculto
  mascota_seleccionada.value = mascota.dataset.value;

  console.log(`Mascota seleccionada: ${mascota.dataset.value}`);
});

btn_submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir envío predeterminado

  // Validamos que los campos no estén vacíos
  if (
    nombre.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    address.value === "" ||
    gender.value === "" ||
    nacionality.value === "" ||
    monto.value === ""
  ) {
    showToastWarning("Asegurese de llenar todos los campos");
    return;
  }

  // Validamos que el email sea válido
  if (!validateEmail(email.value)) {
    showToastWarning("Correo inválido, asegurese de que sea un correo válido");
    return;
  }

  // Validamos que el nombre sea válido
  if (!validateName(nombre.value)) {
    showToastWarning("Nombre inválido, asegurese de que sea un nombre válido");
    return;
  }

  // Validamos que el teléfono sea válido
  if (!validatePhone(phone.value)) {
    showToastWarning(
      "Teléfono inválido, asegurese de que sea un teléfono válido (8 dígitos)"
    );
    return;
  }

  // Validamos que el monto sea válido
  if (!validateMonto(monto.value)) {
    showToastWarning("Monto inválido, asegurese de que sea un monto válido");
    return;
  }

  // Validamos que la mascota sea seleccionada
  if (mascota_seleccionada.value === "") {
    showToastWarning("Seleccione una mascota");
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
      gender.value,
      mascota_seleccionada.value,
      monto.value
    )
  ) {
    // Si todo está correcto, mostramos un mensaje de éxito
    showToastSuccess("Donación realizada con éxito", "./home.html");
  }
});
