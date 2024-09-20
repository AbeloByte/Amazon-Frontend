// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
function Product() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  });
  return (
    <>
      <section className={classes.products_container}>{
        products?.map((eachproduct) => (
          <ProductCard key={eachproduct.id} product={eachproduct} />
        ))
      }</section>
    </>
  );
}

export default Product;
