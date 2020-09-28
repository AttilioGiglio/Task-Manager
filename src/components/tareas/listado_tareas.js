import React, { Fragment } from 'react'
import Tarea from './tarea'

const ListadoTareas = () => {

    const tareas = [
        { nombre: 'Elegir plataforma', estado: true },
        { nombre: 'Elegir colores', estado: false },
        { nombre: 'Elegir plataformas de pago', estado: false },
        { nombre: 'Elegir hosting', estado: false }
    ]

    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
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
                type='button'
                className='btn btn-eliminar'
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    )
}

export default ListadoTareas
