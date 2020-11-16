import React, { useReducer } from 'react';
import alertaReducer from './alerta_reducer';
import alertaContext from './alerta_context';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types/constants';

const AlertaState = props => {
    const initialState = {
        alerta: null
    }
    const [state, dispatch] = useReducer(alertaReducer, initialState);

    // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState
