import React, { useReducer } from 'react';
import ProyectoContext from './proyecto_context';
import ProyectoReducer from './proyecto_reducer'; 


const ProyectoState = props => {
 
    const initialState = {
            formulario: true
    }
    
    // dispatch para ejecutar acciones 
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    // serie de funciones para el crud

    return(
        <ProyectoContext.Provider
        value={{
            formulario: state.formulario
        }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState
