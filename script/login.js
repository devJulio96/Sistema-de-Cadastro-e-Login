const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const mostrarSenha = document.querySelector("#mostrarSenha");
let vefiricador = 0;

mostrarSenha.addEventListener("click", (evt) => {
  if (evt.target.checked) {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const usuariosCadastrados = JSON.parse(localStorage.getItem("usuario"))

  for(let cadastro of usuariosCadastrados){
    if (email.value === cadastro.email && senha.value === cadastro.senha) {
      window.location.href = "../html/home.html";
      email.value = "";
      senha.value = "";
    } else {
      vefiricador ++
    }
  }

  if(vefiricador === usuariosCadastrados.length){
    alert("Email ou senha incorretos")
    email.focus();
  }
});
