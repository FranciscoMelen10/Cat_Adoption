"use strict";
import { validateEmail, validatePassword } from "../utils.js";
import { addUser } from "../api/user.js";

// Toast
import {
  showToastSuccess,
  showToastWarning,
  showToastError,
} from "../Toast.js";

// Obtenemos los valores de los elementos del DOM del formulario
const email = document.querySelector(".input_email");
const password = document.querySelector(".input_password");
const btn_submit = document.querySelector(".btn_submit");

btn_submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir envío predeterminado

  if (email.value === "" || password.value === "") {
    showToastWarning("Asegurese de llenar todos los campos");
    return;
  }

  if (!validateEmail(email.value)) {
    showToastWarning("Correo inválido, asegurese de que sea un correo válido");
    return;
  }

  if (!validatePassword(password.value)) {
    showToastWarning(
      "Contraseña inválida, asegurese de que sea una contraseña válida (8 caracteres)"
    );
    return;
  }

  if (email.value === "Admin@gmail.com" && password.value === "12345678") {
    // Guardamos el usuario en el localStorage
    addUser(email.value, password.value);
    showToastSuccess("Inicio de sesión exitoso", "./Pages/home.html");
  } else {
    showToastError("Correo y contraseña incorrectos, intente de nuevo");
  }
});
