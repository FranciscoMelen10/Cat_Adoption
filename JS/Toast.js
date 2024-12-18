// https://sweetalert2.github.io/#download
var toastMixin = Swal.mixin({
  toast: true,
  icon: "success",
  title: "General Title",
  animation: false,
  position: "top-right",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export function showToastSuccess(text, ruta) {
  Swal.fire({
    toast: true,
    icon: "success",
    title: "Registro exitoso",
    text: text,
    animation: true,
    position: "top-right",
    showConfirmButton: true,
    timerProgressBar: true,
    willClose: () => {
      // Redireccionamos al home
      window.location.href = ruta;
    },
  });
}

export function showToastError(text) {
  toastMixin.fire({
    title: "Error de registro!",
    icon: "error",
    text: text,
    animation: true,
    position: "top-right",
    showConfirmButton: true,
    timer: 10000,
    timerProgressBar: true,
  });
}

export function showToastWarning(text) {
  toastMixin.fire({
    title: "Advertencia!",
    icon: "warning",
    text: text,
    animation: true,
    position: "top-right",
    showConfirmButton: true,
    timerProgressBar: true,
    timer: 10000,
  });
}
