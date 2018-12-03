import axios from 'axios';
import {GET_USER} from './types';

export const getUser = () => dispatch => {
    axios
        .get('/api/users/:id')
        .then(res =>
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        )
};