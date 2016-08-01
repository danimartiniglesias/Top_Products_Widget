import React, {PropTypes} from 'react';
import ProductSlide from  '../ProductSlide/ProductSlide';
import './ProductsSlider.css';


class ProductsSlider extends React.Component{

    constructor (props, context){
        super(props, context);
        this.state = { position: 0 };
        this.moveProductsSlider = this.moveProductsSlider.bind(this);
    }

    moveProductsSlider (direction) {
        let newPosition = (direction === 'prev') ? this.state.position - 1 : this.state.position + 1;
        this.setState({position: newPosition});
    }
    
    render () {
        const {products, product, loadProduct, config} = this.props;
        let productsCollection,
            isPrevEnabled = (this.state.position !== 0),
            isNextEnabled = (this.state.position < (config.numberOfProducts - config.numberOfVisibleProudcts -1));
        if (products && products.length > 0) {
            productsCollection = products.map((p) => {
                let isCurrent = (product.id === p.id ) ? true : false;
                return (
                    <ProductSlide
                        key={p.id}
                        config={config}
                        product={p}
                        isCurrent={isCurrent}
                        loadProduct={loadProduct}
                    />);
            });
        }
        return (
            <div className="productSlider">
                <a href="#prev"
                   className={'sliderArrow sliderArrow--prev' + ((isPrevEnabled) ? '': ' sliderArrow--disabled')}
                   onClick={(e) => {  e.preventDefault(); this.moveProductsSlider('prev'); }}>
                </a>
                <div className="productSlider--window">
                    <ul className="productSlider--container" style={{marginLeft: -1*this.state.position*(this.props.config.thumbWidth+2)}}>
                        {productsCollection}
                    </ul>
                </div>
                <a href="#next"
                   className={'sliderArrow sliderArrow--next' + ((isNextEnabled) ? '':' sliderArrow--disabled')}
                   onClick={(e) => {  e.preventDefault(); this.moveProductsSlider('next'); }}>
                </a>
            </div>
        );
    }
};

ProductsSlider.propTypes = {
    products: PropTypes.array.isRequired,
    loadProduct: PropTypes.func.isRequired
};

export default ProductsSlider;