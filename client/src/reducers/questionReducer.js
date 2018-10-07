import uuid from 'uuid';
import {GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION} from '../actions/types';

const initialState={
    questionItems:[
        {id: uuid(), question:"question 1" },
        {id: uuid(), question:"question 2" },
        {id: uuid(), question:"question 3" },
        {id: uuid(), question:"question 4" }
    ]
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_QUESTIONS:;
        
            return{
                ...state
            };
        case DELETE_QUESTION:
            return{
                ...state,
                questionItems: state.questionItems.filter(questionItems => questionItems.id !== action.payload)
            };
        // case ADD_QUESTION:
        //     return{
        //         ...state,
        //         questionItems: state.questionItems.concat(uuid(), action.question)
        //     }
        default: return state;
    }
}