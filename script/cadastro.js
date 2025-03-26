const formulario = document.querySelector("#formulario");
const usuario = document.querySelector("#usuario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confSenha = document.querySelector("#confSenha");
const mostrarSenha = document.querySelector("#mostrarSenha")
const mostrarConfirmacao = document.querySelector("#mostrarConfirmacao")
const usuarios = [];

mostrarSenha.addEventListener("click", (evt)=>{
  if(evt.target.checked) {
    senha.type = "text";
  } else {
    senha.type = "password"
  }
})

mostrarConfirmacao.addEventListener("click", (evt)=>{
  if(evt.target.checked) {
    confSenha.type = "text";
  } else {
    confSenha.type = "password"
  }
})

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if(senha.value !== confSenha.value){
    formulario.removeEventListener("submit", e => e.preventDefault());
    alert("Digite sua senha corretamente")
    confSenha.focus(); 
  } else {
    if(localStorage.getItem("usuario") === undefined || localStorage.getItem("usuario") === null) {
      usuarios.push({usuario: usuario.value, email: email.value, senha: senha.value});

      localStorage.setItem("usuario", JSON.stringify(usuarios));
  
      window.location.href = "../html/login.html"
      usuario.value ="";
      email.value ="";
      senha.value ="";
      confSenha.value ="";
      mostrarSenha.checked = false;
      mostrarConfirmacao.checked = false;
    } else {
      for(let cadastro of JSON.parse(localStorage.getItem("usuario"))){
        usuarios.push(cadastro);
      }
      
      usuarios.push({usuario: usuario.value, email: email.value, senha: senha.value});

      localStorage.setItem("usuario", JSON.stringify(usuarios));
  
      window.location.href = "../html/login.html"
      usuario.value ="";
      email.value ="";
      senha.value ="";
      confSenha.value ="";
      mostrarSenha.checked = false;
      mostrarConfirmacao.checked = false;
    }
  }
});
  

