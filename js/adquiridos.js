const userLogin = JSON.parse(localStorage.getItem("userLogin"));

// validacion contra userLogin
if(!userLogin) {
  window.location.href = 'logueo.html'
}

// obtener libros adquiridos del storage
const librosAdquiridos = JSON.parse(localStorage.getItem("librosAdquiridos"));

let contenedor = document.querySelector(".contenedor");

function crearHtml(arr) {
  let html;
  arr.forEach((el) => {
    const { nombre, img, id } = el;

    html = `
        <div class="card2" style='overflow: hidden; border: 1px solid darkgrey; padding: 5px; border-radius: 8px' onclick=>
          <img src="../img/${img}" alt="" style='height: 200px; width: 100%; object-fit: cover' >
            <p>${nombre}</p>
            <button id="libro${id}" >Ver pdf</button>
          </div>
        </div>
    `;
    contenedor.innerHTML += html;
  });
}

crearHtml(librosAdquiridos);

librosAdquiridos.forEach((el) => {
  const { id, pdf } = el;
  let libro = document.getElementById(`libro${id}`);
  libro.onclick = () => window.open(pdf);
});
