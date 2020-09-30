import React, { Fragment, useContext } from 'react'
import Tarea from './tarea'
import ProyectoContext from '../../context/proyecto_context';

const ListadoTareas = () => {

    const tareas = [
        { nombre: 'Elegir plataforma', estado: true },
        { nombre: 'Elegir colores', estado: false },
        { nombre: 'Elegir plataformas de pago', estado: false },
        { nombre: 'Elegir hosting', estado: false }
    ]

    // extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);

    const { proyecto, eliminarProyecto} = proyectoContext;

    // si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

// Eliminar un proyecto
const onClickEliminar = () =>{
    eliminarProyecto(proyectoActual.id)
}

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {
                    tareas.length === 0
                        ? (<li className='tarea'><p>No hay tareas</p></li>)
                        : tareas.map(tarea => (
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
