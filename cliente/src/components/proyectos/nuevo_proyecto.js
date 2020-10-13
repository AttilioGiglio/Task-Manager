import React, {Fragment, useState, useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyecto_context';

const NuevoProyecto = () => {
    
    // obtener el state del formulario
    const proyectosContext= useContext(ProyectoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // state para el proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    })

    const onChangeProyecto = (e) =>{
        guardarProyecto({...proyecto, [e.target.name]:e.target.value})
    }

    const onClickFormulario = (e) => {
        mostrarFormulario()
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault();

        // validar el proyecto
        if(nombre==''){
            mostrarError();
            return;
        }
        // agregar state
        agregarProyecto(proyecto)

        // reiniciar el form
        guardarProyecto({
            nombre:''
        })
    }

    const {nombre} = proyecto;

    return (
        <Fragment>
          <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
            >Nuevo Proyecto</button>
         {
         formulario
         ?
         (
            <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input 
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
            />

            <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />

        </form>
         )
         :
         null
         }
         {
         errorFormulario 
         ? <p className='mensaje error'>El nombre del proyecto es obligatorio</p> 
         : null
         }
        </Fragment>
    )
}

export default NuevoProyecto
