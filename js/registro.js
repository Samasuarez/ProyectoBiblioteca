document.body.style.margin = 0;
const emailReg = document.getElementById("emailRegistro");
const passwordReg = document.getElementById("contraseñaRegistro");
const resgistrarme = document.getElementById("btn1");
const textoRegistro = document.getElementById("textoMensaje");

const usuariosRegistrados = JSON.parse(
  localStorage.getItem("usuariosRegistrados")
);

// variables de mensajes de alerta
const msjRegistroExitoso = "Usuario registrado!";
const msjUsuarioExistente = "Ya hay un usuario registrado con ese email";
const msjCamposObligatorios = "Ambos campos son obligatorios";
let usuarios = [];

if (localStorage.getItem("usuarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [];
}

const manejoAlerta = (textoAlerta, display, color) => {
  textoRegistro.style.display = display;
  textoRegistro.style.color = color;
  textoRegistro.innerHTML = textoAlerta;
};

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
          manejoAlerta(msjUsuarioExistente, "block", "red");
          usuarioYaLogueado = true;
        }
      });

      if (!usuarioYaLogueado) {
        manejoAlerta(msjRegistroExitoso, "block", "green");
        localStorage.setItem(
          "usuariosRegistrados",
          JSON.stringify([...usuariosRegistrados, registroData])
        );
      }
    } else {
      manejoAlerta(msjRegistroExitoso, "block", "green");
      localStorage.setItem(
        "usuariosRegistrados",
        JSON.stringify([registroData])
      );
    }
  } else {
    manejoAlerta(msjCamposObligatorios, "block", "red");
  }
  console.log("registroData", registroData);
};

resgistrarme.onclick = () => capturarDatosRegistro();

var form = document.getElementById("formRegistro");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
