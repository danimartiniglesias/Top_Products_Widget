import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as topProductsWidgetActions from './actions/topProductsWidgetActions';
import TopProductsWidget from './components/TopProductsWidget/TopProductsWidget';
import {eventHelperOnEvent, eventHelperEmitEvent} from './tools/eventHelper';

const store = configureStore();

eventHelperOnEvent('micrositesHome:loaded', 'top-products-widget', (event) => {

    const config = {
        widgetTileText: PRV.Copy.getTxt('topProdTitle'),
        widgetDescText: PRV.Copy.getTxt('topProdDesc'),
        widgetCountWord: PRV.Copy.getTxt('topProdCountWord'),
        widgetPriceShop: PRV.Copy.getTxt('topProdPriceShop'),
        widgetSeeMore: PRV.Copy.getTxt('topProdSeeMore')
    };

    let campaignPK = (event && event.memo && event.memo.campaignPK) ? event.memo.campaignPK: 0;
    store.dispatch(topProductsWidgetActions.loadProductsCollection(campaignPK));
    render (
        <Provider store={store}>
            <TopProductsWidget config={config} />
        </Provider>,
        document.getElementById('top-products-widget')
    );

    eventHelperEmitEvent('topProductsWidget:tracking', null, {category: 'ecomm', action: 'widget', label: 'cat_top_products', nonInteraction: {nonInteraction : true}} );
});
