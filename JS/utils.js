export function validateEmail(email) {
  let res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return res.test(email);
}

export function validatePassword(password) {
  return password.length >= 8 ? true : false;
}

export function validatePhone(phone) {
  return phone.length >= 8 ? true : false
}

export function validateName(name) {
  let res = /^[a-zA-Z\s]*$/;
  return res.test(name);
}