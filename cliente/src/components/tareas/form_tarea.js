import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from '../..//context/proyectos/proyecto_context';
import TareaContext from '../../context/tareas/tarea_context';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    const tareaContext = useContext(TareaContext)
    const { tareaseleccionada, agregarTarea, validarTarea, errortarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareaContext;

    // useeffect que detecta si hay una tarea seleccionada
    useEffect(() => {
if(tareaseleccionada!==null){
    guardarTarea(tareaseleccionada)
}else{
    guardarTarea({
        name:''
    })
}
    },[tareaseleccionada])

    // state del formulario
    const [tarea, guardarTarea] = useState({
        name: '',
    })

    // extraer el name de la tarea
    const { name } = tarea;

    // si no hay proyecto seleccionado
    if (!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // validar
        if (name.trim() === '') {
            validarTarea();
            return;
        }

        // si es edicion o nueva tarea
        if(tareaseleccionada===null){
        // agregar la nueva tarea al state global de tareas
        // agregar al state tarea del modulo la propiedad proyectoID y estado 
        tarea.proyecto = proyectoActual._id;
        agregarTarea(tarea);
        }else{
            //  actualizar tarea existente
            actualizarTarea(tarea);
            // elimina tarea seleccionada del state
            limpiarTarea();
        }

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)

        // reiniciar el formulario
        guardarTarea({
            name: ''
        })

    }

    return (
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea ...'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        placeholder='Nombre Tarea ...'
                        name='submit'
                        value={tareaseleccionada ? 'editar tarea' : 'agregar tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className='mensaje error'>El name de la tarea es obligatorio</p> : null}
        </div>

    )
}

export default FormTarea
