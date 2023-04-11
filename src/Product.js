import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Title</p>
        <p className="product__price">$30</p>
        <div className="product__rating">⭐️⭐️⭐️</div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpghttps://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61XUZ6gvDQL._AC_SY879_.jpg"
        alt="product_image"
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;