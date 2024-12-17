import { getDonation, removeDonation } from "../api/donation.js";
import { removeUser } from "../api/user.js";

// Obtenemos las donaciones del localStorage
const donation = getDonation();

// Obtenemos el contenedor de donadores
const contenedor_donadores = document.querySelector(".contenedor_donadores");

// Función para listar los donadores
function listarDonadores() {
  let donadores = `
    <section class="contenedor_donador">
        <h1>Francisco De Jesús Meléndez Simplina</h1>
            <article>
              <img src="../public/Icons/mail.svg" alt="Icono de " />
              <p>fmelendezsimplina@gmail.com</p>
            </article>
            <article>
              <img src="../public/Icons/phone.svg" alt="Icono de " />
              <p>86542912</p>
            </article>
            <article>
              <img src="../public/Icons/location.svg" alt="Icono de " />
              <p>Km 17.5, carretera nueva león, ciudad el doral, K-95</p>
            </article>
            <article>
              <img src="../public/Icons/nacionalidad.svg" alt="Icono de " />
              <p>Honduras</p>
            </article>
            <article>
              <img src="../public/Icons/cash.svg" alt="Icono de " />
              <p>$1000</p>
            </article>
            <article>
              <img src="../public/Icons/cat.svg" alt="Icono de " />
              <p>Snow</p>
            </article>
              <img class="gender" src="../public/Icons/man.svg" alt="Icono de " />
    </section>
    `;

  if (donation) {
    donation.forEach((donador) => {
      donadores += `
            <section class="contenedor_donador">
                <h1>${donador.nombre}</h1>
                  <article>
                    <img src="../public/Icons/mail.svg" alt="Icono de " />
                    <p>${donador.correo}</p>
                  </article>
                  <article>
                    <img src="../public/Icons/phone.svg" alt="Icono de " />
                    <p>${donador.telefono}</p>
                  </article>
                  <article>
                    <img src="../public/Icons/location.svg" alt="Icono de " />
                    <p>${donador.direccion}</p>
                  </article>
                  <article>
                    <img src="../public/Icons/nacionalidad.svg" alt="Icono de " />
                    <p>${donador.nacionalidad}</p>
                  </article>
                  <article>
                    <img src="../public/Icons/cash.svg" alt="Icono de " />
                    <p>$${donador.monto}</p>
                  </article>
                  <article>
                    <img src="../public/Icons/cat.svg" alt="Icono de " />
                    <p>${donador.mascota}</p>
                  </article>
                  ${
                    donador.sexo === "Masculino"
                      ? '<img class="gender" src="../public/Icons/man.svg" alt="Icono del hombre" />'
                      : '<img class="gender" src="../public/Icons/woman.svg" alt="Icono de la mujer" />'
                  }
            </section>
        `;
    });
  }

  // Insertamos los donadores en el contenedor
  contenedor_donadores.innerHTML = donadores;
}

listarDonadores();

const Btn = document.querySelector(".Btn");

Btn.addEventListener("click", () => {
  alert("¡Gracias por tu donación!");
  removeDonation();
  removeUser();
  window.location.href = "../";
});
