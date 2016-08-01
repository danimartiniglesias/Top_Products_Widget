import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as topProductsWidgetActions from '../../actions/topProductsWidgetActions';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import TopProductsDetail from '../TopProductsDetail/TopProductsDetail';
import config from './TopProductsWidgetConfig';
import './TopProductsWidget.css';

class TopProductsWidget extends React.Component{

    constructor (props, context){
        super(props, context);
        this.config = Object.assign(config, props.config);
        this.loadProduct = this.loadProduct.bind(this);
        this.changeProductDetail = this.changeProductDetail.bind(this);
        this.closeTopProductsDetail = this.closeTopProductsDetail.bind(this);
    }

    loadProduct (product) {
        this.props.actions.loadProduct(product);
    }

    changeProductDetail (direction) {
        this.props.actions.changeProductDetail(direction, this.props.productsCollection, this.props.product);
    }

    closeTopProductsDetail () {
        this.loadProduct({});
    }

    render(){
        return (
            <div className={(this.props.isWidgetShown) ? '' : 'hidden'}>
                <TopProductsDetail
                    product={this.props.product}
                    config={this.config}
                    closeTopProductsDetail={this.closeTopProductsDetail}
                    changeProductDetail={this.changeProductDetail}
                />
                <section className="clearfix">
                    <p className="top-products-widget--title">
                        <strong>{this.config.widgetTileText}</strong><br/>{this.config.widgetDescText}</p>
                    <ProductsSlider
                        products={this.props.productsCollection}
                        product={this.props.product}
                        config={this.config}
                        loadProduct={this.loadProduct}
                    />
                </section>
            </div>
        );
    }
}

TopProductsWidget.propTypes = {
    config: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        productsCollection: state.topProductsWidget.productsCollection,
        product: state.topProductsWidget.product,
        isWidgetShown : state.topProductsWidget.isWidgetShown,
        errors: state.errors
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(topProductsWidgetActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProductsWidget);
