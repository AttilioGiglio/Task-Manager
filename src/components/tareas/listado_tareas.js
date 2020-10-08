import React, { Fragment, useContext } from 'react'
import Tarea from './tarea'
import ProyectoContext from '../../context/proyectos/proyecto_context';
import TareaContext from '../../context/tareas/tarea_context';

const ListadoTareas = () => {

    // extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectoContext;

    // obtener las tareas del proyecto
    const tareaContext = useContext(TareaContext)
    const { tareasproyecto } = tareaContext;

    // si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {
                    tareasproyecto.length === 0
                        ? (<li className='tarea'><p>No hay tareas</p></li>)
                        : tareasproyecto.map(tarea => (
                            <Tarea
                                tarea={tarea}
                            />
                        ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    )
}

export default ListadoTareas
