import React, { useContext, useState } from 'react';
import ProyectoContext from '../..//context/proyectos/proyecto_context';
import TareaContext from '../../context/tareas/tarea_context';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    const tareaContext = useContext(TareaContext)
    const { agregarTareas } = tareaContext;

    // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    const {nombre} = tarea;

    // si no hay proyecto seleccionado
    if(!proyecto) return null;
    
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


        // pasar la validacion


        // agregar la nueva tarea al state global de tareas
            // agregar al state tarea del modulo la propiedad proyectoID y estado 
        tarea.proyectoID = proyectoActual.id;
        tarea.estado = false;
        agregarTareas(tarea);

        // reiniciar el formulario
    
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
                        name='nombre'
                        value = {nombre}
                        onChange = {handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        placeholder='Nombre Tarea ...'
                        name='submit'
                        value='Agregar Tarea'
                    />
                </div>
            </form>

        </div>

    )
}

export default FormTarea
