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
  

  function validarSenha(){
    if(senha.value.length < 8) {
      alert("A senha precisa ter no mínimo 8 dígitos");
    } else if (senha.value.match(/[A-Z]/g) === null) {
      alert("A senha precisa ter pelo menos uma letra maiúscula")
    } else if(senha.value.match(/[0-9]/g) === null){
      alert("A senha precisa ter pelo menos um número")
    } else if(senha.value.match(/\W/g) === null) {
      alert("A senha precisa ter pelo menos um caractere especial")
    } else if(senha.value === confirmacao.value){
      cadastrarUsuarioNovo();
      redirecionarPagina();
    } else {
      confirmacao.focus();
      alert("Digite sua senha corretamente");
    }
  }

  function cadastrarUsuarioNovo(){
    usuariosNovos.push({nomeUsuario: usuario.value, email: email.value.toLowerCase(), senha: senha.value});
    localStorage.setItem("usuario", JSON.stringify(usuariosNovos));
    alert("Cadastro feito com sucesso");
    limparCampos(); 
  }

  function redirecionarPagina(){
    window.location.href = "../html/login.html";
  }

  if(cadastros === null){
    validarSenha();
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
      validarSenha();
    }
  }
});


  

