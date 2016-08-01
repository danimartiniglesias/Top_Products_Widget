import * as types from './actionTypes';

export function throwAppError(_error) {
    let error = { msg: _error.message };
    return {type: types.THROW_APP_ERROR, error};
}
