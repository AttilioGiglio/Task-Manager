import React, { useReducer } from 'react';
import TareaContext from './tarea_context';
import TareaReducer from './tarea_reducer';

const TareaState = props => {
    const initialState = {
        tareas: 
        [
            {nombre: 'elegir Plataforma', estado: true, proyectId: 1},
            {nombre: 'elegir Colores', estado: false, proyectId: 2},
            {nombre: 'elegir Plataforma de pago', estado: true, proyectId: 3},
            {nombre: 'elegir Hosting', estado: false, proyectId: 1},
            {nombre: 'elegir Colores', estado: true, proyectId: 2},
            {nombre: 'elegir Plataforma de pago', estado: false, proyectId: 3},
            {nombre: 'elegir Hosting', estado: true, proyectId: 4},
            {nombre: 'elegir Colores', estado: false, proyectId: 1},
            {nombre: 'elegir Plataforma', estado: true, proyectId: 2},
            {nombre: 'elegir Hosting', estado: false, proyectId: 3},
            {nombre: 'elegir Colores', estado: true, proyectId: 4},
            {nombre: 'elegir Plataforma de pago', estado: false, proyectId: 1},
        ],
    }
    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return(
        <TareaContext.Provider value={{tareas: state.tareas}}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
