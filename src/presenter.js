import { agregarProyecto } from "./tdd";

const modal = document.getElementById('modal');
const agregarProyectoBtn = document.getElementById('agregar-proyecto');
const cerrarModalBtn = document.getElementsByClassName('close')[0];
const agregarProyectoForm = document.getElementById('agregar-proyecto-form');
const proyectosLista = document.getElementById('proyectos-lista'); 

agregarProyectoBtn.onclick = function() {
  modal.style.display = 'block';
}


cerrarModalBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
agregarProyectoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombreProyecto = document.getElementById('nombre-proyecto').value;
  const descripcionProyecto = document.getElementById('descripcion-proyecto').value;
  agregarProyecto(nombreProyecto, descripcionProyecto, proyectosLista); // Llamamos a la función agregarProyecto con la lista de proyectos como argumento
  modal.style.display = 'none';
  // Limpiar el formulario después de agregar el proyecto
  agregarProyectoForm.reset();
});