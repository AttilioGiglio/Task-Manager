import { TAREAS_PROYECTO } from '../../types/constants';

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
        return{
            ...state,
            tareasproyecto: state.tareas.filter(tarea => tarea.proyectId === action.payload)
        }
        default:
            return state; 
    }
}