import axios from 'axios';
import {GET_QUESTIONS,GET_SPECIFIC_QUESTION, ADD_QUESTION, DELETE_QUESTION, QUESTIONS_LOADING} from './types';

export const getQuestions = () => dispatch => {
    // return{
    //     type: GET_QUESTIONS
    // };
    dispatch(setQuestionsLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: GET_QUESTIONS,
                payload: res.data
            })
        )
};
export const addQuestion = (item) => dispatch => {
    axios
    .post('/api/items', item)
    .then(res=> 
        dispatch({
            type: ADD_QUESTION,
            payload: res.data
    }))
};
// HERE IS THE SOLUTION
export const oneQuestion = id => dispatch =>{
    var identity=""+id;
    axios.get('/api/items/'+identity).then(res =>
        dispatch({
            type: GET_SPECIFIC_QUESTION,
            payload: res.data
        }))
}
export const deleteQuestion = id => dispatch => {
    var identity=""+id;
    axios.delete('/api/items/'+identity).then(res =>
        dispatch({
            type: DELETE_QUESTION,
            payload: res.data
        })
    )
};
export const setQuestionsLoading = () => {
    return{
        type: QUESTIONS_LOADING
    };
};
