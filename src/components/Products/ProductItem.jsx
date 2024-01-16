import Counter from '../Counter';
import ProductInfo from './ProductInfo';
import './ProductItem.css'
import React, {useState} from 'react';

function ProductItem(props){

    const {product} = props;
    const {imageUrl, producTitle, productPrice} = product

    // const addBtn = document.querySelector(".addBtn");
    // addBtn.addEventListener("click",function(){
    //     console.log("Ürün Sepete Eklendi")
    // })

    const [title, setTitle] = useState(producTitle)

    const clickHandler = () =>{
        setTitle(`${producTitle} güncellendi`)
    }

    // console.log(product.imageUrl)
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={imageUrl} alt="cay" />
            </div>

            <div className="product-info">
                <ProductInfo>
                <h2>{title}</h2>
                {/* <span>{productPrice}₺</span> */}
                <Counter productPrice = {productPrice}/>
                </ProductInfo>
            </div>
            <button onClick={clickHandler}>Sepete Ekle</button>
        </div>
    );
}

export default ProductItem;