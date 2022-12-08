document.body.style.margin = 0;
// validacion contra userLogin
const userLogin = localStorage.getItem("userLogin");
if (userLogin) {
  window.location.href = "paginaPrincipal.html";
}

const login = document.getElementsByClassName(".card");
const emailLogin = document.getElementById("email");
const passwordLogin = document.getElementById("password");
const recordar = document.getElementById("check");
const confirmar = document.getElementById("btnConfirmar");
const alertaLogin = document.getElementById("alertaLogin");

const usuariosRegistrados = JSON.parse(
  localStorage.getItem("usuariosRegistrados")
);

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
    let usuarioLogueado = false;
    usuariosRegistrados.map((usuario) => {
      if (
        usuario.email === loginData.email &&
        usuario.password === loginData.password
      ) {
        alertaLogin.style.display = "none";
        usuarioLogueado = true;
        localStorage.setItem("userLogin", JSON.stringify(loginData));
        window.location.href = "paginaPrincipal.html";
      } else if(!usuarioLogueado) {
        alertaLogin.innerHTML = msjNoHayUsuariosReg;
        alertaLogin.style.display = "block";
      }
    });
  } else {
    // mostrar un mensaje al usuario para que ingrese los campos que faltan
    // cambiar el display para que aparezca la alerta
    alertaLogin.innerHTML = msjCamposObligatorios;
    alertaLogin.style.display = "block";
  }
};

confirmar.onclick = () => capturarDatosLogin();

// previene que se refresque la pagina al clickear el submit del form
var form = document.getElementById("formLogin");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
