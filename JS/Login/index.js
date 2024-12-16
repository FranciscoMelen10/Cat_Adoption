"use strict";
import { validateEmail, validatePassword } from "../utils.js";
import { addUser } from "../api/user.js";

// Obtenemos los valores de los elementos del DOM del formulario
const email = document.querySelector(".input_email");
const password = document.querySelector(".input_password");
const btn_submit = document.querySelector(".btn_submit");

btn_submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir envío predeterminado

  if (email.value === "" || password.value === "") {
    alert("Asegurese de llenar todos los campos");
    return;
  }

  if (!validateEmail(email.value)) {
    alert("Correo inválido, asegurese de que sea un correo válido");
    return;
  }

  if (!validatePassword(password.value)) {
    alert(
      "Contraseña inválida, asegurese de que sea una contraseña válida (8 caracteres)"
    );
    return;
  }

  if (email.value === "Admin@gmail.com" && password.value === "12345678") {
    alert("Inicio de sesión exitoso");

    // Guardamos el usuario en el localStorage
    addUser(email.value, password.value);

    // Redireccionamos al home
    window.location.href = "./Pages/home.html";
  } else {
    alert("Correo y contraseña incorrectos, intente de nuevo");
  }
});
