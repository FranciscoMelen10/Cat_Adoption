"use strict";
import { removeDonation } from "../api/donation.js";
import { removeUser } from "../api/user.js";
import { fetchCats } from "../api/cats.js";

// Obtenemos el contenedor de los gatos
const galeria_gatos = document.querySelector(".galeria_gatos");
const loader = document.querySelector(".loader");

const displayCats = async () => {
  try {
    const cats = await fetchCats();
    let gatos = "";
    cats.forEach((cat) => {
      gatos += `<img src="${cat.url}" alt="Cat id:${cat.id}"></img>`;
    });

    loader.style.display = "none";
    galeria_gatos.innerHTML = gatos;
  } catch (error) {
    console.error("Error al obtener los gatos:", error);
  }
};

displayCats();

const Btn = document.querySelector(".Btn");

Btn.addEventListener("click", () => {
  alert("¡Gracias por tu donación!");
  removeDonation();
  removeUser();
  window.location.href = "../";
});
