import React, {PropTypes} from 'react';
import ProductDetailImageViewer from '../ProductDetailImageViewer/ProductDetailImageViewer';
import {eventHelperEmitEvent} from './../../tools/eventHelper';
import './TopProductsDetail.css';
import './../../../public/API/entity/css/product.css';

const TopProductsDetail = ({product, config, closeTopProductsDetail, changeProductDetail}) => {

    if (Object.keys(product).length){
        let isPrevEnabled = (product.order !== 0);
        let isNextEnabled = (product.order !== (config.numberOfProducts-1));
        let _cat = (product.categories && product.categories.length) ? product.categories[0].id : product.categories.id;
        let url = "/microsites/fittingroom/campaign/" + product.campaign.id + "/category/" + _cat + "/product/" + product.id;
        return (
            <div className="topProduct_detail">
                <header className="topProduct_detail_header clearfix">
                    <nav className="topProduct_detail_nav">
                        <a href="#"
                           className={'topProduct_detail_nav--prev' + ((isPrevEnabled) ? '': ' topProduct_detail_nav--disabled')}
                           onClick={(e) => {  e.preventDefault(); changeProductDetail('prev'); }}>
                        </a>
                        {product.order+1} {config.widgetCountWord} {config.numberOfProducts}
                        <a href="#"
                           className={'topProduct_detail_nav--next' + ((isNextEnabled) ? '': ' topProduct_detail_nav--disabled')}
                           onClick={(e) => {  e.preventDefault(); changeProductDetail('next'); }}>

                        </a>
                    </nav>
                    <a className="right topProduct_detail_close" href="#" onClick={(e) => {  e.preventDefault(); closeTopProductsDetail(); }} >&times;</a>
                </header>
                <ProductDetailImageViewer images={product.images} config={config} />
                <div className="topProduct_detail_info">
                    <header className="topProduct_detail_header sheet_separator">
                    <h2 className="product_title product_title--topProductsDetail" dangerouslySetInnerHTML={{__html: product.name}} />
                        <div className="topProduct_detail--boxPrice">
                            <span className="product_privaliaPrice mrm" dangerouslySetInnerHTML={{__html: product.pvs}} />
                            <span className="product_pvpPrice product_pvpPrice_value" dangerouslySetInnerHTML={{__html: product.pvp}} />
                            <span className="product_pvpPrice"> {config.widgetPriceShop} </span>

                        </div>
                    </header>
                    <p className="topProduct_detail_description" dangerouslySetInnerHTML={{__html: product.description}} />
                    <a href={url}
                       className="button button__medium button__light button--topProductsDetail"
                       onClick={(e) => {
                            eventHelperEmitEvent('topProductsWidget:tracking', null, {category: 'ecomm', action: 'view_product', label: 'cat_top_products'});
                       }}
                    >{config.widgetSeeMore}</a>
                </div>
            </div>
        );
    }else{
        return (
            <div className="topProduct_detail"></div>
        );
    }

};

TopProductsDetail.propTypes = {
    product: PropTypes.object.isRequired,
    closeTopProductsDetail: PropTypes.func.isRequired
};

export default TopProductsDetail;