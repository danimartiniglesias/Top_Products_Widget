import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorsReducer (state = initialState.errors, action) {
    switch (action.type) {
        case types.THROW_APP_ERROR:
            return [
                ...state,
                Object.assign({}, action.error)
            ];
            break;
        default:
            return state;
    }
}