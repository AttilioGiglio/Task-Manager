import { FORMULARIO_PROYECTO } from '../types/constants';

export default (state, action) => {

    switch(action.type){
        case FORMULARIO_PROYECTO:
            return { 
                ...state,
                formulario: true
            }
    }
    console.log(state)
}