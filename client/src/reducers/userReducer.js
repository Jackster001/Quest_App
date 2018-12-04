import {GET_USER} from '../actions/types';

const initialState = {
    userData:{
        firstName=null
    }
};
export default function(state= initialState, action){
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                userData: action.payload
            };
        default: return state;
    }
}