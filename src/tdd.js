export function agregarProyecto(nombre, descripcion, listaProyectos) {
  const nuevoProyecto = document.createElement('li');
  nuevoProyecto.textContent = `${nombre}: ${descripcion}`;
  const contenedorProyecto = document.createElement('div');
  contenedorProyecto.classList.add('proyecto');

  // Crear el título del proyecto
  const tituloProyecto = document.createElement('h3');
  tituloProyecto.textContent = nombre+ ": ";

  // Crear la descripción del proyecto
  const descripcionProyecto = document.createElement('p');
  descripcionProyecto.textContent = descripcion;

  // Crear el botón de eliminar
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.classList.add('eliminar');
  botonEliminar.addEventListener('click', () => {
    eliminarProyecto(contenedorProyecto, listaProyectos);
  });

  // Agregar elementos al contenedor del proyecto (caja)
  contenedorProyecto.appendChild(tituloProyecto);
  contenedorProyecto.appendChild(descripcionProyecto);

  // Agregar el contenedor del proyecto a la lista de proyectos
  listaProyectos.appendChild(contenedorProyecto);
}
export function eliminarProyecto(proyecto, listaProyectos) {
  listaProyectos.removeChild(proyecto);
}