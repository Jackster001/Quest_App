import {GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING} from '../actions/types';

const initialState={
    questionItems:[],
    loading: false
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_QUESTIONS:
            return{
                ...state,
                questionItems: action.payload,
                loading: false
            };
        case DELETE_QUESTION:
            return{
                ...state,
                questionItems: state.questionItems.filter(questionItems => questionItems._id !== action.payload)
            };
        case ADD_QUESTION:
            return{
                ...state,
                questionItems: [action.payload, ...state.questionItems]
            };
        case QUESTIONS_LOADING:
            return{
                ...state,
                loading: true
            }
        default: return state;
    }
}