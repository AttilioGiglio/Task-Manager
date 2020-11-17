import React, { useReducer } from 'react';
import authReducer from './auth_reducer';
import authContext from './auth_context';
import { REGISTRO_EXISTOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types/constants';
import clienteAxios from '../../config/axios'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState)

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta.data);
            dispatch({
                type: REGISTRO_EXISTOSO,
                payload: respuesta.data
            })

        } catch(error){
            console.log(error.response)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    return(
        <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
