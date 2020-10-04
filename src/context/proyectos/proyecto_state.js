import React, { useReducer } from 'react';
import ProyectoContext from './proyecto_context';
import ProyectoReducer from './proyecto_reducer';
import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from '../types/constants';
import { v4 as uuidv4 } from 'uuid';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'tienda' },
        { id: 2, nombre: 'intranet' },
        { id: 3, nombre: 'diseño de sitio web' },
        { id: 4, nombre: 'MERN BABY!' },
        { id: 5, nombre: 'Ohh yeah!' }
    ]


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
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        // insertar el proyecto del state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
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
const eliminarProyecto = proyectoId => {
    dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId
    })
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
