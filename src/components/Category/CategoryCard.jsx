/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="" alt="">
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
