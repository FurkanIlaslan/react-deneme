import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {

    // const [productName, setProductName] = useState("");
    // const [productPrice, setProductPrice] = useState("");
    // const [productImage, setProductImage] = useState("");

    // function titleChangeHandler(e){
    //     setProductName(e.target.value)
    // }

    // function priceChangeHandler(e){
    //     setProductPrice(e.target.value)
    // }

    // function imageChangeHandler(e){
    //     setProductImage(e.target.value)
    // }

    // ! İKİNCİ YÖNTEM
    const [productData, setProductData] = useState({
        productName :"", 
        productPrice:"", 
        productImage:"",
    });

    function titleChangeHandler(e){
        setProductData({
            ...productData,
            productName: e.target.value})
    }

    function priceChangeHandler(e){
        setProductData({
            ...productData,
            productPrice: e.target.value
        })
    }

    function imageChangeHandler(e){
        setProductData({
            ...productData,
            productImage : e.target.value
        })
    }
    // console.log(productData)

    const submitHandler = (e) => {
        e.preventDefault()
        const newProductData = {
            productName: productData.productName,
            productPrice:productData.productPrice,
            productImage:productData.productImage,
        }
        console.log(newProductData);
        setProductData({
            productName:"",
            productPrice:"",
            productImage:""
        })
    }

  return (
    <form className="product-form" onSubmit={submitHandler}>
        <div className="product-form-input">
            <label>Ürün Adı:</label> <br />
            <input type="text" placeholder="Ürün Adı" value={productData.productName} onChange={titleChangeHandler} />
        </div>
        <div className="product-form-input">
            <label>Ürün Fiyatı:</label> <br />
            <input type="number" placeholder="Ürün Fiyatı" value={productData.productPrice} onChange={priceChangeHandler} />
        </div>
        <div className="product-form-input">
            <label>Ürün Görseli:</label> <br />
            <input type="text" placeholder="Ürün Görseli" value={productData.productImage} onChange={imageChangeHandler} />
        </div>
        <button>Ekle</button>
    </form>

  );
};

export default ProductForm;
