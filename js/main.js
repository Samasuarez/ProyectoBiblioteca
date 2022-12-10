const userLogin = JSON.parse(localStorage.getItem("userLogin"));

// validacion contra userLogin
if(!userLogin) {
  window.location.href = 'logueo.html'
}

const productos = [
  {
    id: 1,
    nombre: "El mundo de sofia",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 1200,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 2,
    nombre: "El misterio del solitario",
    categoria: "novela",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 3,
    nombre: "Siruela",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 4,
    nombre: "Memorias de un Geisha",
    categoria: "novela",
    autor: "Arthur Golden",
    precio: 1500,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 5,
    nombre: "Roma soy yo",
    categoria: "novela/historia",
    autor: "Santiago Posteguillo",
    precio: 1200,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 6,
    nombre: "La Gaya ciencia",
    categoria: "filosofia",
    autor: "Nietzsche ",
    precio: 1900,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 7,
    nombre: "Humano demasiado humano",
    categoria: "filosofia",
    autor: "Nietzsche ",
    precio: 1900,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 8,
    nombre: "El cuervo",
    precio: 800,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 9,
    nombre: "La geneologia de la moral",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1900,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 10,
    nombre: "Asi hablo zaratustra",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1900,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 11,
    nombre: "El anticristo",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 12,
    nombre: "Mas alla del bien y el mal",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 13,
    nombre: "De la muerte de Dios",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 14,
    nombre: "Ecce homo",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 15,
    nombre: "La nausea",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 16,
    nombre: "El ser y la nada",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
  {
    id: 17,
    nombre: "El ser y la nada",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: "elMundoDeS.webp",
    estado: "Comprar",
    pdf: "../pdf/libroEdesur.pdf",
  },
];

// obtener libros adquiridos del storage
const librosAdquiridos = JSON.parse(localStorage.getItem("librosAdquiridos"));
// obtener librosEnCarrito adquiridos del storage
const librosEnCarrito = JSON.parse(localStorage.getItem("librosCarrito"));

const btnDesloguear = document.getElementById("btnDesloguear");
btnDesloguear.onclick = () => {
  localStorage.removeItem("userLogin");
  // btnDesloguear.style.display = 'none';
};

// validar si hay libros adquiridos para no iterar sobre algo undefined
if (librosAdquiridos) {
  // iterar sobre libros adquiridos
  librosAdquiridos.map((el) => {
    // iterar productos
    productos.map((prod, index) => {
      // comparar id del libro adquirido contra el id del producto
      if (prod.id === el.id) {
        // cambiar estado del producto si los id coinciden
        // prod.estado = "Ver pdf";
        // quitar del array de productos los libros que ya han sido adquiridos
        productos.splice(index, 1);
      }
    });
  });
}

// validar si hay libros adquiridos para no iterar sobre algo undefined
if (librosEnCarrito) {
  // iterar sobre libros adquiridos
  librosEnCarrito.map((el) => {
    // iterar productos
    productos.map((prod) => {
      // comparar id del libro adquirido contra el id del producto
      if (prod.id === el.id) {
        // cambiar estado del producto si los id coinciden
        prod.estado = "En carrito";
      }
    });
  });
}
let filtrarPorPrecio = (arr, filtro) =>
  arr.filter((producto) => producto.precio <= filtro);

function buscarProducto(arr, filtro) {
  const encontrado = arr.find((producto) => {
    return producto.nombre.includes(filtro);
  });
  return encontrado;
}
const compras = [];

const agregarLibrosAlCarrito = (el, libro) => {
  const arrayStorage = JSON.parse(localStorage.getItem("librosCarrito"));
  // console.log("arrayLocalStorageCarrito", arrayStorage);

  if (arrayStorage) {
    localStorage.setItem(
      "librosCarrito",
      JSON.stringify([...arrayStorage, el])
    );
  } else {
    localStorage.setItem("librosCarrito", JSON.stringify([el]));
  }
  libro.disabled = true;
  libro.firstChild.data = "En carrito";

  // console.log("Libro agregado al carrito", el);
};

let contenedor = document.querySelector(".contenedor");

function crearHtml(arr) {
  let html;
  arr.forEach((el, index) => {
    const { nombre, precio, img, id, estado } = el;
    // console.log("elemento", el);

    const btnBloqueado = () => {
      let res = null;
      if (estado === "En carrito") {
        res = "disabled";
      }
      return res;
    };

    const agregarPDF = () => {
      let res = null;
      if (estado === "Adquirido") {
        res = "disabled";
      }
      return res;
    };

    html = `
      <div class="card2" style='overflow: hidden; border: 1px solid darkgrey; padding: 5px; border-radius: 8px' onclick=>
        <img src="../img/${img}" alt="" style='height: 200px; width: 100%; object-fit: cover' >
          <p>${nombre}</p>
          <p>$${precio}</p>
          <button id="libro${id}" ${btnBloqueado()}>${estado}</button>
        </div>
      </div>
  `;
    contenedor.innerHTML += html;
  });
}

crearHtml(productos);

productos.forEach((el) => {
  const { id, pdf } = el;
  let libro = document.getElementById(`libro${id}`);
  // console.log("Libro", libro);
  if (el.estado === "Comprar") {
    libro.onclick = () => agregarLibrosAlCarrito(el, libro);
  } else {
    libro.onclick = () => window.open(pdf);
  }
});
