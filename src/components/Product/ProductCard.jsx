/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
function ProductCard({product}) {
// eslint-disable-next-line no-unused-vars
const { image, title, id, rating, price,description  } = product;
  return(

<>
 <div className={classes.card__container}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h3>{title}</h3>
        <div>
            <Rating value={rating.rate} precision={0.1}/>
            {/* rating count */} 
            <small>{rating.count}</small>
        </div>
        <div>
            <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>add to cart</button>
      </div>
    </div>
</>
)
}

export default ProductCard;
