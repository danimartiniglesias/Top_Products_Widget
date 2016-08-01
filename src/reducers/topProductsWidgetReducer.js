import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function topProductsWidgetReducer (state = initialState.topProductsWidget, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTS_COLLECTION_SUCCESS:
            var newState = Object.assign({}, state);
            newState.productsCollection = action.productsCollection;
            return newState;
            break;
        case types.LOAD_PRODUCT:
            var newState = Object.assign({}, state);
            newState.product = action.product;
            return newState;
            break;
        case types.MOVE_PRODUCTS_SLIDER:
            var newState = Object.assign({}, state);
            newState.productsSliderPosition = action.newPosition;
            return newState;
            break;
        case types.SHOW_TOP_PRODUCTS_WIDGET:
            var newState = Object.assign({}, state);
            newState.isWidgetShown = true;
            return newState;
            break;
        default:
            return state;
    }
}