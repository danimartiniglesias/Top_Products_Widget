import * as types from './actionTypes';
import CatalogService from '../services/CatalogService';
import {throwAppError} from './errorsActions';

export function loadProductsCollectionSuccess(productsCollection) {
    return { type: types.LOAD_PRODUCTS_COLLECTION_SUCCESS, productsCollection};
}

export function showTopProductsWidget() {
    return { type: types.SHOW_TOP_PRODUCTS_WIDGET};
}

export function loadProductsCollection(campaignPK) {
    return function (dispatch) {
        return CatalogService.getTopProducts(campaignPK).then((productsCollection) => {
            if (productsCollection.length) {
                dispatch(loadProductsCollectionSuccess(productsCollection));
                dispatch(showTopProductsWidget());
            }
        }).catch( (error) => {
            dispatch(throwAppError(error));
        });
    };
}

export function loadProduct(product) {
    return { type: types.LOAD_PRODUCT, product };
}

export function changeProductDetail (direction, productsCollection, oldProduct) {
    let newOrder = (direction==='next') ? oldProduct.order + 1: oldProduct.order - 1;
    let product =  productsCollection[newOrder];
    return { type: types.LOAD_PRODUCT, product };
}

export function moveProductsSlider(currentPosition, direction) {
    let newPosition = currentPosition;
    if (direction === 'prev') { newPosition = currentPosition + 66 }
    if (direction === 'next') { newPosition = currentPosition - 66 }
    return { type: types.MOVE_PRODUCTS_SLIDER,  newPosition};
}
