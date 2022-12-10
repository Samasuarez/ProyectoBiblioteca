// const registro = document.getElementsByClassName(".card");
const emailReg = document.getElementById("emailRegistro");
const passwordReg = document.getElementById("contraseñaRegistro");
const resgistrarme = document.getElementById("btn1");
const textoRegistro = document.getElementById("textoMensaje");

const usuariosRegistrados = JSON.parse(
  localStorage.getItem("usuariosRegistrados")
);

// variables de mensajes de alerta
const msjRegistroExitoso = 'Usuario registrado!';
const msjUsuarioExistente = 'Ya hay un usuario registrado con ese email';
// console.log(registro);
let usuarios = [];
if (localStorage.getItem("usuarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [];
}

class Usuario {
  constructor(usuario, email, password) {
    this.usuario = usuario;
    this.email = email;
    this.password = password;
  }
}

const manejoAlerta = (textoAlerta, display) => {
  textoRegistro.style.display = display;
  textoRegistro.innerHTML = textoAlerta;
}

const capturarDatosRegistro = () => {
  // capturar datos de los input
  let registroData = { email: emailReg.value, password: passwordReg.value };
  // guardar en localStorage si los dos tienen valor
  if (registroData.email && registroData.password) {
    // validar si ya hay usuariosRegistrados
    if (usuariosRegistrados) {
      let usuarioYaLogueado = false;
      // validar que no hay un usuario registrado con el email ingresado
      usuariosRegistrados.map((usuario) => {
        if (usuario.email === registroData.email) {
          manejoAlerta(msjUsuarioExistente, 'block');
          usuarioYaLogueado = true;
        }
      });

      if (!usuarioYaLogueado) {
        manejoAlerta(msjRegistroExitoso, 'block');
        localStorage.setItem('usuariosRegistrados', JSON.stringify([...usuariosRegistrados, registroData]));
      }
      
    } else {
      manejoAlerta(msjRegistroExitoso, 'block');
      localStorage.setItem('usuariosRegistrados', JSON.stringify([registroData]));
    }
  }
  console.log("registroData", registroData);
};

// resgistrarme.onclick = () => guardarLS("localStorage");
resgistrarme.onclick = () => capturarDatosRegistro();

var form = document.getElementById("formRegistro");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
