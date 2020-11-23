import React, {useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyecto_context'
import TareaContext from '../../context/tareas/tarea_context';

const ProyectoUnitario = ({proyecto}) => {

  const proyectoContext = useContext(ProyectoContext);
  const {proyectoActual} = proyectoContext;
  // obtener la funcion del context de tarea
  const tareaContext = useContext(TareaContext)
  const {obtenerTareas} = tareaContext;
  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id);
    obtenerTareas(id);
  }
  
    return (
      <li>
          <button
          type='button'
          className='btn btn-blank'
          onClick={() => seleccionarProyecto(proyecto._id)}
          >
        {proyecto.nombre}
          </button>
      </li>
    )
}

export default ProyectoUnitario
