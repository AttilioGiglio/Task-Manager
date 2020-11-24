import React, { useReducer } from 'react';
import TareaContext from './tarea_context';
import TareaReducer from './tarea_reducer';
import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA } from '../../types/constants';
import clienteAxios from '../../config/axios'

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }
    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones 
    
    // obtener las tareas de un proyecto
    const obtenerTareas = async(proyecto) => {
        console.log(proyecto);
        try{
            const resultado = await clienteAxios.get('/api/tareas', {params: { proyecto }});
            // console.log(resultado)
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        }catch(error){
            console.log(error)
        }
        
        
    }

    const agregarTarea = async(tarea) => {
        console.log(tarea)
        const resultado = await clienteAxios.post('/api/tareas', tarea);
        console.log(resultado);
        try{ 
            dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    } catch(error){
        console.log(error)
    }
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
