import React, { useReducer } from 'react';
import ProyectoContext from './proyecto_context';
import ProyectoReducer from './proyecto_reducer';
import { FORMULARIO_PROYECTO } from '../types/constants';


const ProyectoState = props => {

    const initialState = {
        proyectos: [
            { id: 1, nombre: 'tienda' },
            { id: 2, nombre: 'intranet' },
            { id: 3, nombre: 'diseño de sitio web' },
            { id: 4, nombre: 'MERN BABY!' },
            { id: 5, nombre: 'Ohh yeah!' }
        ],
        formulario: false
    }

    // dispatch para ejecutar acciones 
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    // serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState
