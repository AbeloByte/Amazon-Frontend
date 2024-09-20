// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState();
  const [isLoading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data),
        setLoading(false)
     
    )
      .catch(
        (err) => console.log(err),
        setLoading(false)
      )
  }, []);
  return (
    <>

   { isLoading?(<Loader/>):(
    <section className={classes.products_container}>{
        products?.map((eachproduct) => (
          <ProductCard key={eachproduct.id} product={eachproduct} />
        ))
      }</section>
      
    )}
      
    </>
  );
}

export default Product;
