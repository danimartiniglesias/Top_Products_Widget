import {combineReducers} from 'redux';
import topProductsWidget from './topProductsWidgetReducer';
import errors from './errorsReducer';

const rootReducers = combineReducers ({
    topProductsWidget,
    errors
});

export default rootReducers; 