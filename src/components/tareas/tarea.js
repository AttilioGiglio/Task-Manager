import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tarea_context';
import ProyectoContext from '../..//context/proyectos/proyecto_context';

const Tarea = ({ tarea }) => {

    // Extraer si un proyecto esta activo
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    // obtener la función del context tarea
    const tareaContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas } = tareaContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto;

    // Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre} </p>

            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                        // onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        // onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                // onClick={() => seleccionarTarea(tarea) }
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea
