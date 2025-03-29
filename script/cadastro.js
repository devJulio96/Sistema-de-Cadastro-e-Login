const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const usuario = document.querySelector("#usuario");
const formulario = document.querySelector("#formulario");
const confirmacao = document.querySelector("#confirmacao");
const mostrarSenha = document.querySelector("#mostrarSenha");
const mostrarConfirmacao = document.querySelector("#mostrarConfirmacao");

const cadastros = JSON.parse(localStorage.getItem("usuario"));

const limparCampos = () =>{
  usuario.value ="";
  email.value ="";
  senha.value ="";
  confirmacao.value ="";
  mostrarSenha.checked = false;
  mostrarConfirmacao.checked = false;
}

const exibirSenha = (e) => { e.target.checked ? senha.type = "text" : senha.type = "password" };
const exibirConfirmacao = (e) => { e.target.checked ? confirmacao.type = "text" : confirmacao.type = "password" };
mostrarSenha.addEventListener("click", exibirSenha);
mostrarConfirmacao.addEventListener("click", exibirConfirmacao);

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const usuariosNovos = [];
  let usuarioRepetido = false;
  let emailRepetido = false;

  if(cadastros === null){

    usuariosNovos.push({nomeUsuario: usuario.value, email: email.value.toLowerCase(), senha: senha.value})
    localStorage.setItem("usuario", JSON.stringify(usuariosNovos));
    limparCampos();

  } else {

    for(let cadastro of cadastros){
      usuariosNovos.push(cadastro);

      if(usuario.value === cadastro.nomeUsuario){
        usuarioRepetido = true;
      } else if(email.value.toLowerCase() === cadastro.email) {
        emailRepetido = true;
      }
    }

    if(usuarioRepetido){
      alert("Nome de usuário já existe!");
      usuarioRepetido = false;
      usuario.focus();

    } else if (emailRepetido) {
      alert("E-mail já cadastrado, utilize outro email");
      emailRepetido = false;
      email.focus();

    } else {
      usuariosNovos.push({nomeUsuario: usuario.value, email: email.value.toLowerCase(), senha: senha.value});
      localStorage.setItem("usuario", JSON.stringify(usuariosNovos));
      limparCampos();
    }
    
  }
});

//     window.location.href = "../html/login.html"
  

