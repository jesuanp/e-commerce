import {productos} from './actions';


const initialState = {
    productos: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case productos: return {
            ...state,
            productos: action.payload
        };
    
        default: return state;
    }
}

export default reducer
