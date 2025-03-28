const formulario = document.querySelector("#formulario");
const usuario = document.querySelector("#usuario");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confSenha = document.querySelector("#confSenha");
const mostrarSenha = document.querySelector("#mostrarSenha")
const mostrarConfirmacao = document.querySelector("#mostrarConfirmacao")

const limparCampos = () =>{
  usuario.value ="";
  email.value ="";
  senha.value ="";
  confSenha.value ="";
  mostrarSenha.checked = false;
  mostrarConfirmacao.checked = false;
}

const exibir = (evt) => { evt.target.checked ? senha.type = "text" : senha.type = "password"};

mostrarSenha.addEventListener("click", exibir);
mostrarConfirmacao.addEventListener("click", exibir);

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const usuarios = [];
  const usuariosCadastrados = JSON.parse(localStorage.getItem("usuario"));

  if(senha.value !== confSenha.value){
    
    formulario.removeEventListener("submit", e => e.preventDefault());
    alert("Digite sua senha corretamente");
    confSenha.focus(); 

  } else {
    if(localStorage.getItem("usuario") === null) {
      usuarios.push({usuario: usuario.value, email: email.value.toLowerCase(), senha: senha.value});

      localStorage.setItem("usuario", JSON.stringify(usuarios));
  
      window.location.href = "../html/login.html"
      limparCampos();
      
    } else {
      for(let cadastro of usuariosCadastrados){
        usuarios.push(cadastro);
      }

      usuarios.push({usuario: usuario.value, email: email.value.toLowerCase(), senha: senha.value});
      localStorage.setItem("usuario", JSON.stringify(usuarios));
  
      window.location.href = "../html/login.html"
      limparCampos();
    }
  }
});
  

