import {GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING, GET_SPECIFIC_QUESTION, UPDATE_ANSWER} from '../actions/types';
import QuestionModal from '../components/QuestionModal';
import update from 'react-addons-update';

const initialState={
    questionItems:[],
    oneQuestion: null,
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
        case UPDATE_ANSWER:
            return update(state, { 
                answer: { 
                [action._id]: {
                    answer: {$set: action.payload}
                }
            }
            });
        case GET_SPECIFIC_QUESTION:
            return{
                ...state,
                oneQuestion:action.payload
                // oneQuestion: state.questionItems.filter(questionItems => questionItems._id == action.payload)
            };
        case DELETE_QUESTION:
            return{
                ...state,
                questionItems: state.questionItems.filter(questionItems => questionItems._id !== action.payload),

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