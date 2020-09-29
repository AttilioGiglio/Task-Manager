import React, { useReducer } from 'react';
import ProyectoContext from './proyecto_context';
import ProyectoReducer from './proyecto_reducer'; 
import { FORMULARIO_PROYECTO } from '../types/constants';


const ProyectoState = props => {
 
    const initialState = {
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

    return(
        <ProyectoContext.Provider
        value={{
            formulario: state.formulario,
            mostrarFormulario
        }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState
