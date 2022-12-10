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
        
        <div class="card mb-4 box-shadow cardLibro">
          <div class="card-header" style='padding: 0px'>
            <img class="card-img-top" src="../img/${img}" style='height: 200px; object-fit: cover; overflow: hidden' alt="Card image cap">
          </div>
          <div class="card-body d-flex flex-column ">
            <h4 class="card-title pricing-card-title">${nombre}</h4>
            <button id="libro${id}" type="button" class="mt-auto btn btn-lg btn-block btn-outline-primary" >Ver pdf</button>
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
