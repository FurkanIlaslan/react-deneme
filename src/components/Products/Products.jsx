import ProductItem from "./ProductItem";
import './Products.css'
import {productData} from "../../productData";
import NewProducts from "../NewProduct/NewProducts";


function Products (){

    return (
        <div className="product-wrapper">
            <NewProducts/>
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