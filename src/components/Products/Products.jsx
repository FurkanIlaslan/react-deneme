import ProductItem from "./ProductItem";
import './Products.css'
import {productData} from "../../productData";


function Products (){

    return (
        <div className="product-wrapper">
            <h1>Products</h1>
            <div className="products">
                {productData.map((product) => {
                    return (
                        <ProductItem
                        product = {product}
                        key = {product.producTitle}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Products