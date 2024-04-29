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