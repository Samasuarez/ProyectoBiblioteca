const userLogin = JSON.parse(localStorage.getItem("userLogin"));

// validacion contra userLogin
if (!userLogin) {
  window.location.href = "logueo.html";
}

librosCarrito = JSON.parse(localStorage.getItem("librosCarrito"));

let contenedorCarrito = document.querySelector(".contenedorCarrito");

const limpiarCarrito = () => {
  localStorage.removeItem("librosCarrito");
  window.location.href = "paginaPrincipal.html";
};

const borrarLibroDelCarrito = (el) => {
  // iteras sobre el array de librosCarrito del localStorage
  librosCarrito.map((libro, index) => {
    // validar si coinciden el id de cada contra el id del libro que le pasas por parametro
    if (libro.id === el.id) {
      librosCarrito.splice(index, 1);
      localStorage.setItem("librosCarrito", JSON.stringify(librosCarrito));
    }
  });

  if (librosCarrito.length === 0) {
    localStorage.removeItem("librosCarrito");
  }

  window.location.reload();
};

const finalizarCompra = () => {
  localStorage.removeItem("librosCarrito");

  const librosAdquiridos = JSON.parse(localStorage.getItem("librosAdquiridos"));

  if (librosAdquiridos) {
    localStorage.setItem(
      "librosAdquiridos",
      JSON.stringify([...librosAdquiridos, ...librosCarrito])
    );
  } else {
    localStorage.setItem("librosAdquiridos", JSON.stringify(librosCarrito));
  }
  window.location.href = "adquiridos.html";
};

function crearHtml() {
  let html;
  let totalAPagar = 0;

  if (!librosCarrito) {
    contenedorCarrito.innerHTML += `
    <h2>Carrito (${0})</h2>
    <div class="tarjetaCarrito" >
        No hay elementos en el carrito
    </div>`;
  } else {
    contenedorCarrito.innerHTML += `<h2>Carrito (${librosCarrito.length})</h2>`;

    librosCarrito.forEach((el, index) => {
      const { nombre, precio, img, id } = el;

      totalAPagar = totalAPagar + precio;

      html = `
          <div class="tarjetaCarrito" style='overflow: hidden' >
            <img src="../img/${img}" alt="" style='height: 50px; width: 50px; object-fit: cover' >
            <p style='font-weight: bold'>${nombre}</p>
            <p style='margin-left: auto'>$ ${precio}</p>
            <span id='delete${id}' class="material-symbols-outlined" style='cursor: pointer; margin-left: 10px; color: red' >
              delete
            </span>
          </div>
      `;
      contenedorCarrito.innerHTML += html;
    });

    contenedorCarrito.innerHTML += `
      <div class="tarjetaCarrito" style='overflow: hidden' >
          <p style='margin-left: auto'>TOTAL $${totalAPagar}</p>
      </div>`;

    contenedorCarrito.innerHTML += `
      <div class="tarjetaCarrito" style='overflow: hidden' >
          <button style='margin-right: auto' type="button" class="btn btn-lg btn-block btn-danger" onclick="limpiarCarrito()">Cancelar compra</button>
          <button style='margin-left: auto' type="button" class="btn btn-lg btn-block btn-outline-primary" onclick="finalizarCompra()" >Finalizar compra</button>
      </div>`;
  }
}

crearHtml();

if (librosCarrito) {
  librosCarrito.forEach((el) => {
    const { id, pdf } = el;
    let libro = document.getElementById(`delete${id}`);
    libro.onclick = () => borrarLibroDelCarrito(el);
  });
}
