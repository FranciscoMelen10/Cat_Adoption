"use strict";
import { removeDonation } from "../api/donation.js";
import { removeUser } from "../api/user.js";
import { fetchCats } from "../api/cats.js";
import { showToastSuccess } from "../Toast.js";

// Obtenemos el contenedor de los gatos
const galeria_gatos = document.querySelector(".galeria_gatos");
const loader = document.querySelector(".loader");

const displayCats = async () => {
  try {
    const cats = await fetchCats();
    let gatos = "";
    cats.forEach((cat) => {
      gatos += `
      <img 
        src="${cat.url}" alt="Cat id:${cat.id}"  
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        />
      `;
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
  removeDonation();
  removeUser();
  showToastSuccess("¡Gracias por tu donación!", "../");
});
