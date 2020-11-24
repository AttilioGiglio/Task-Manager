import React, { useReducer } from 'react';
import ProyectoContext from './proyecto_context';
import ProyectoReducer from './proyecto_reducer';
import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from '../../types/constants';
// import { v4 as uuidv4 } from 'uuid';
import clienteAxios from '../../config/axios';

const ProyectoState = props => {

    const proyectos = []


    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    }

    // dispatch para ejecutar acciones 
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    // serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // agregar nuevo proyecto
    const agregarProyecto = async proyecto => {
        // resultado.id = uuidv4();
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado)
            // insertar el proyecto del state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    // obtener proyectos
    const obtenerProyectos = async () => {
     try {
        const resultado =  await clienteAxios.get('/api/proyectos');
        dispatch({
            type: OBTENER_PROYECTO,
            payload: resultado.data.proyectos
        })
     } catch(error) {
         console.log(error)
     }
    }

    // valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    // Selecciona el proyecto que el usuario le dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }
    // Eliminar un proyecto
    const eliminarProyecto = async (proyectoId) => {
        try{
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.formulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState
