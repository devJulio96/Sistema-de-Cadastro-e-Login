const formulario = document.querySelector("#formulario");
const usuario = document.querySelector("#usuario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confSenha = document.querySelector("#confSenha");
const mostrarSenha = document.querySelector("#mostrarSenha")
const mostrarConfirmacao = document.querySelector("#mostrarConfirmacao")

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
    localStorage.setItem("usuario", `${usuario.value}`);
    localStorage.setItem("email", `${email.value}`);
    localStorage.setItem("senha", `${senha.value}`);
  
    window.location.href = "../html/login.html"
    usuario.value ="";
    email.value ="";
    senha.value ="";
    confSenha.value ="";
    mostrarSenha.checked = false;
    mostrarConfirmacao.checked = false;
  }
});
  

