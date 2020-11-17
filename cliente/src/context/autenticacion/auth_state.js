import React, { useReducer } from 'react';
import authReducer from './auth_reducer';
import authContext from './auth_context';
import { REGISTRO_EXISTOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types/constants';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // las funciones

    return(
        <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
