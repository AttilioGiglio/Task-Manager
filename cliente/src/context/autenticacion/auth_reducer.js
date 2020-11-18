import { REGISTRO_EXISTOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types/constants';

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXISTOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload
            }
        case LOGIN_EXITOSO:
            return {

            }
        case LOGIN_EXITOSO:
            return {

            }
        case LOGIN_ERROR:
            return {

            }
        case CERRAR_SESION:
            return {

            }
        default:
            return state;
    }
}