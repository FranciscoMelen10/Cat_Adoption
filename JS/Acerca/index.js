"use strict";
import { removeDonation } from "../api/donation.js";
import { removeUser } from "../api/user.js";
import { showToastSuccess } from "../Toast.js";

const Btn = document.querySelector(".Btn");

Btn.addEventListener("click", () => {
  removeDonation();
  removeUser();
  showToastSuccess("¡Gracias por tu donación!", "../");
});
