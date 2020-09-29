import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTO } from '../types/constants';

export default (state, action) => {

    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTO:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario:false
            }
    }
    console.log(state)
}