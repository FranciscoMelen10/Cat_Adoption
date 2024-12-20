export function addDonation(
  nombre,
  correo,
  telefono,
  direccion,
  nacionalidad,
  sexo,
  mascota,
  monto
) {
  // Obtenemos las donaciones del localStorage
  const donation = getDonation();

  // Creamos un objeto con los datos de la nueva donación
  let Newdonation = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    nacionalidad: nacionalidad,
    direccion: direccion,
    sexo: sexo,
    mascota: mascota,
    monto: monto,
  };

  // Agregamos la nueva donación al array de donaciones y lo guardamos en el localStorage
  // Si no hay donaciones, creamos un array con la nueva donación
  const donationArray = donation ? [...donation, Newdonation] : [Newdonation];

  localStorage.setItem("donation", JSON.stringify(donationArray));

  return true;
}

export function getDonation() {
  return JSON.parse(localStorage.getItem("donation"));
}

export function removeDonation() {
  localStorage.removeItem("donation");
}
