import {CLEAR_ERROR, SET_CONFIRM_PASSWORD, SET_ERROR, SET_PASSWORD} from "../actions/actions.js";

const initialState = {
    password: '',
    confirmPassword:'',
    error:''
}

const formReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PASSWORD:
            return{ ...state, password: action.payload}
        case SET_CONFIRM_PASSWORD:
            return {...state, confirmPassword: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        case CLEAR_ERROR:
            return {...state, error: ''}
        default:
            return state
    }
}
export default formReducer