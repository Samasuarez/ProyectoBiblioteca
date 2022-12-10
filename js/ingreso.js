// validacion contra userLogin
const userLogin = localStorage.getItem('userLogin')
if (userLogin) {
  window.location.href = 'paginaPrincipal.html'
}

class Usuario {
  constructor(usuario, email, password) {
    this.usuario = usuario;
    this.email = email;
    this.password = password;
  }
}
const login = document.getElementsByClassName(".card");
const emailLogin = document.getElementById("email");
const passwordLogin = document.getElementById("password");
const recordar = document.getElementById("check");
const confirmar = document.getElementById("btnConfirmar");
const alertaLogin = document.getElementById("alertaLogin");

console.log("emailLogin", emailLogin)
console.log("passwordLogin", passwordLogin)

// console.log(login);

// mock de usuariosRegistrados, borrar mas adelante
// localStorage.removeItem("usuariosRegistrados");
// const testUsuarios = [
//   { email: "juan@gmail.com", password: "juan123" },
//   { email: "pepe@gmail.com", password: "pepe123" },
// ];
// localStorage.setItem("usuariosRegistrados", JSON.stringify(testUsuarios));

const usuariosRegistrados = JSON.parse(
  localStorage.getItem("usuariosRegistrados")
);

// console.log("usuarioRegistrados", usuarioRegistrados)
const capturarDatosLogin = () => {
  const msjCamposObligatorios = "Ambos campos son obligatorios";
  const msjNoHayUsuariosReg = "Por favor, revisa los datos ingresados";

  // capturar los datos del input y ponerlos en un objeto {email: '', password: ''}
  let loginData = { email: emailLogin.value, password: passwordLogin.value };
  // let emailInputValue = emailLogin.value;
  console.log("loginData", loginData);
  // loginData = {email: '', password: ''}
  // validar que los datos ingresados no sean nulos
  if (loginData.email && loginData.password) {
    // cambiamos el display para que desaparezca la alerta
    alertaLogin.style.display = "none";
    // comparar esos datos con los del localStorage
    // console.log("usuariosRegistrados", usuariosRegistrados);
    usuariosRegistrados.map((usuario) => {
      if (usuario.email === loginData.email && usuario.password === loginData.password) {
          alertaLogin.style.display = "none";
          // console.log("USUARIO LOGUEADO")
          localStorage.setItem('userLogin', JSON.stringify(loginData))
          window.location.href = 'paginaPrincipal.html'
        } else {
          alertaLogin.innerHTML = msjNoHayUsuariosReg;
          alertaLogin.style.display = "block";
        }
    });
    // usuario {email: 'juan@gmail.com', password: 'juan123'}
  } else {
    // mostrar un mensaje al usuario para que ingrese los campos que faltan
    // cambiamos el display para que aparezca la alerta
    alertaLogin.innerHTML = msjCamposObligatorios;
    alertaLogin.style.display = "block";
    
  }
};

confirmar.onclick = () => capturarDatosLogin();


var form = document.getElementById("formLogin");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);