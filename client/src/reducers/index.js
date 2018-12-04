import {combineReducers} from 'redux';
import questionReducer from './questionReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    question: questionReducer,
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
});