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

  for(let cadastro of JSON.parse(localStorage.getItem("usuario"))){
    if (email.value === cadastro.email && senha.value === cadastro.senha) {
      window.location.href = "../html/home.html";
      email.value = "";
      senha.value = "";
    } else {
      vefiricador ++
    }
  }

  if(vefiricador === JSON.parse(localStorage.getItem("usuario")).length){
    alert("Email ou senha incorretos")
    email.focus();
  }
});
