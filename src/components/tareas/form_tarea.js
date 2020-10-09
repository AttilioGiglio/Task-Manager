import React, { useContext } from 'react';
import ProyectoContext from '../..//context/proyectos/proyecto_context';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    // si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmit = (e) => {
        e.preventDefault();

        // validar

        // pasar la validacion

        // agregar la nueva tarea al state de tareas

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
