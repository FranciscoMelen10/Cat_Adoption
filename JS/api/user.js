export function addUser(email, password) {
  let user = {
    email: email,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function removeUser() {
  localStorage.removeItem("user");
}
