const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const mostrarSenha = document.querySelector("#mostrarSenha");



mostrarSenha.addEventListener("click", (evt) => {
  evt.target.checked ? senha.type = "text" : senha.type = "password";
});

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const usuariosCadastrados = JSON.parse(localStorage.getItem("usuario"))
  let emailCadastrado = false;
  let senhaCorreta = false;

  function redirecionarPagina(){
    window.location.href = "../html/home.html";
    email.value = "";
    senha.value = "";
  }

  for(let cadastro of usuariosCadastrados){
    if (email.value.toLowerCase() === cadastro.email) {
      emailCadastrado = true;

      if(senha.value === cadastro.senha){
        senhaCorreta = true;
      }
    } 
  }

  if(!emailCadastrado){
    alert("Email não cadastrado, por favor cadastre-se!");
    senha.value ="";
    email.focus();
  } else if(!senhaCorreta){
    alert("Senha incorreta!");
    senhaCorreta = 0;
    senha.focus();
  } else {
    redirecionarPagina();
  }
});
