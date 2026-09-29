const contactos = [];

const inputNombre = document.getElementById("input-nombre");
const inputTelefono = document.getElementById("input-telefono");
const btnAgregar = document.getElementById("btn-agregar");
const listaContactos = document.getElementById("lista-contactos");
const mensajeVacio = document.getElementById("mensaje-vacio");
const contador = document.getElementById("contador");
const inputBuscar = document.getElementById("input-buscar");

function renderizar(lista = contactos) {
  listaContactos.innerHTML = "";

  mensajeVacio.style.display = lista.length === 0 ? "block" : "none";

  lista.forEach((contacto) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = contacto.nombre + " - " + contacto.telefono;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      const index = contactos.indexOf(contacto);
      contactos.splice(index, 1);
      renderizar();
    });

    li.appendChild(span);
    li.appendChild(btnEliminar);
    listaContactos.appendChild(li);
  });

  contador.textContent = "Contactos: " + contactos.length;
}

btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const telefono = inputTelefono.value.trim();

  if (nombre === "" || telefono === "") return;

  contactos.push({ nombre: nombre, telefono: telefono });
  inputNombre.value = "";
  inputTelefono.value = "";
  renderizar();
});

inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase().trim();
  const filtrados = contactos.filter((c) =>
    c.nombre.toLowerCase().includes(texto)
  );
  renderizar(filtrados);
});

renderizar();
