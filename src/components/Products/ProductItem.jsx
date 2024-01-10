import ProductInfo from './ProductInfo';
import './ProductItem.css'

function ProductItem(props){

    const {product} = props;
    const {imageUrl, producTitle, productPrice} = product

    // console.log(product.imageUrl)
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={imageUrl} alt="cay" />
            </div>

            <div className="product-info">
                <ProductInfo>
                <h2>{producTitle}</h2>
                <span>{productPrice}₺</span>
                </ProductInfo>
            </div>

        </div>
    );
}

export default ProductItem;