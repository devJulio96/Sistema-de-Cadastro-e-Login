const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const mostrarSenha = document.querySelector("#mostrarSenha");

mostrarSenha.addEventListener("click", (evt) => {
  if (evt.target.checked) {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if ( email.value === localStorage.getItem("email") && senha.value === localStorage.getItem("senha")) {
    window.location.href = "../html/home.html";
    email.value = "";
    senha.value = "";
  } else {
    alert("Email ou senha incorretos");
  }
});
