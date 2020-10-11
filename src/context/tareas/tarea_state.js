import React, { useReducer } from 'react';
import TareaContext from './tarea_context';
import TareaReducer from './tarea_reducer';
import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA } from '../../types/constants';
import { v4 as uuidv4 } from 'uuid';

const TareaState = props => {
    const initialState = {
        tareas: 
        [
            {id:1, nombre: 'elegir Plataforma', estado: true, proyectId: 1},
            {id:2, nombre: 'elegir Colores', estado: false, proyectId: 2},
            {id:3, nombre: 'elegir Plataforma de pago', estado: true, proyectId: 3},
            {id:4, nombre: 'elegir Hosting', estado: false, proyectId: 1},
            {id:5, nombre: 'elegir Colores', estado: true, proyectId: 2},
            {id:6, nombre: 'elegir Plataforma de pago', estado: false, proyectId: 3},
            {id:7, nombre: 'elegir Hosting', estado: true, proyectId: 4},
            {id:8, nombre: 'elegir Colores', estado: false, proyectId: 1},
            {id:9, nombre: 'elegir Plataforma', estado: true, proyectId: 2},
            {id:10, nombre: 'elegir Hosting', estado: false, proyectId: 3},
            {id:11, nombre: 'elegir Colores', estado: true, proyectId: 4},
            {id:12, nombre: 'elegir Plataforma de pago', estado: false, proyectId: 1},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }
    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones 
    
    // obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
        tarea.id = uuidv4()
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // CAMBIAR ESTADO DE TAREA
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    
    // Extrae una tarea para edicion 
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // edita o modifica una tarea
const actualizarTarea = tarea => {
    dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea
    })
}

// elimina la tarea seleccionada
const limpiarTarea = () => {
    dispatch({
        type: LIMPIAR_TAREA
    })
}

    return(
        <TareaContext.Provider value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada: state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
