import React, {PropTypes} from 'react';
import './ProductDetailImageViewer.css';

class ProductDetailImageViewer extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {imgIndex: 'pic1'};
        this.clickThumb = this.clickThumb.bind(this);
    }

    clickThumb (newImgIndex){
        this.setState({ imgIndex: newImgIndex });
    }

    render(){
        let bigImg = this.props.images.find( (img, index) => {
                if (img.name === this.state.imgIndex && img.context === 'medium'){
                    return img;
                }
            }),
            thumbsCollection = this.props.images.map( (thumb, index) => {
                if (thumb.name !== this.state.imgIndex && thumb.context === 'small'){
                    return (
                        React.createElement(
                            'img',
                            {
                                key: index,
                                src: thumb.path,
                                width: this.props.config.thumbWidth,
                                height: this.props.config.thumbHeight,
                                className: 'productDetailImageViewer--thumb',
                                onClick: () => {  this.clickThumb(thumb.name) }
                            }
                    ));
                }
            });
        return(
            <section className="productDetailImageViewer clearfix">
                <figure>
                    <img width={this.props.config.productDetailBigImageWidth} height={this.props.config.productDetailBigImageWidth} src={bigImg.path || ''} />
                </figure>
                <figure>
                    {thumbsCollection}
                </figure>
            </section>
        );
    }
}

ProductDetailImageViewer.propTypes = {
    images: PropTypes.array.isRequired
};

export default ProductDetailImageViewer;

