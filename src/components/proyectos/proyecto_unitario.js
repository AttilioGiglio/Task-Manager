import React, {useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyecto_context'

const ProyectoUnitario = ({proyecto}) => {

  const proyectoContext = useContext(ProyectoContext);
  const {proyectoActual} = proyectoContext;
  
    return (
      <li>
          <button
          type='button'
          className='btn btn-blank'
          onClick={() => proyectoActual(proyecto.id)}
          >
        {proyecto.nombre}
          </button>
      </li>
    )
}

export default ProyectoUnitario
