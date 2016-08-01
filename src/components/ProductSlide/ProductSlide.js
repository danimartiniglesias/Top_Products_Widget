import React, {PropTypes} from 'react';
import './ProductSlide.css';
import {eventHelperEmitEvent} from './../../tools/eventHelper';

const ProductSlide = ({product, isCurrent, loadProduct, config}) => {

    let style = (isCurrent) ? ' active': '';
    let image = product.images[0];
    return (
        <li className={'topProductsSlide productSlider--productSlide' + style}>
            <a href="#" 
               onClick={(e) => { 
                    e.preventDefault();
                    loadProduct(product);
                    eventHelperEmitEvent('topProductsWidget:tracking', null, {category: 'ecomm', action: 'view_preview', label: 'cat_top_products'});
               }} 
            >
                <img src={image.path} alt={image.alt} width={config.thumbWidth} height={config.thumbHeight} />
            </a>
        </li>

    );
};

ProductSlide.propTypes = {
    product: PropTypes.object.isRequired,
    isCurrent: PropTypes.bool.isRequired,
    loadProduct: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
};

export default ProductSlide;