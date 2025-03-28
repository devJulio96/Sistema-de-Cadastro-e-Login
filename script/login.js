const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const mostrarSenha = document.querySelector("#mostrarSenha");
let verificadorEmail = 0;
let verificadorSenha = 0;

mostrarSenha.addEventListener("click", (evt) => {
  evt.target.checked ? senha.type = "text" : senha.type = "password";
});

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const usuariosCadastrados = JSON.parse(localStorage.getItem("usuario"))

  for(let cadastro of usuariosCadastrados){
    if (email.value.toLowerCase() === cadastro.email) {
      if(senha.value === cadastro.senha){
        window.location.href = "../html/home.html";
        email.value = "";
        senha.value = "";
      } else{
        verificadorSenha ++;
      }
    } else {
      verificadorEmail++;
    }
  }

  if(verificadorEmail === usuariosCadastrados.length){
    alert("Email não cadastrado, por favor cadastre-se!");
    verificadorEmail = 0;
    senha.value ="";
    email.focus();
  }
  if(verificadorSenha === usuariosCadastrados.length){
    alert("Senha incorreta!");
    verificadorSenha = 0;
    senha.focus();
  }
});
