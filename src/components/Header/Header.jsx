// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCartAdd } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
// import { a } from "react-router-dom";
function Header() {

  return (
    <>
      <section className={classes.fixed}>
        <section>
          {/* Header  Container*/}
          <div className={classes.header__container}>
            {/* Logo and DeliverContent Container */}
            <div className={classes.logo__container}>
              {/* Logo */}
              <a href="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt=""
                />
              </a>

              {/* Delivery Content */}
              <div className={classes.delivery}>
                <span>
                  {/* Location Icon */}
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivered To</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Searching */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
                {/* <option value="Arts & Crafts">Arts & Crafts</option>
                <option value="Automotive">Automotive</option>
                <option value="Baby">Baby</option>
                <option value="Beauty & Personal Care">
                  Beauty & Personal Care
                </option>
                <option value="Books">Books</option>
                <option value="Boys' Fashion">Boys Fashion</option>
                <option value="Computers">Computers</option>
                <option value="Deals">Deals</option>
                <option value="Digital Music">Digital Music</option>
                <option value="Electronics">Electronics</option>
                <option value="Girls' Fashion">Girls Fashion</option>
                <option value="Health & Household">Health & Household</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Industrial & Scientific">
                  Industrial & Scientific
                </option>
                <option value="Kindle Store">Kindle Store</option>
                <option value="Luggage">Luggage</option>
                <option value="Men's Fashion">Men Fashion</option>
                <option value="Movies & TV">Movies & TV</option>
                <option value="Music, CDs & Vinyl">Music, CDs & Vinyl</option> */}
              </select>
  
              
              <input type="text" name="" id="" placeholder="Search Product" />

              {/* Search Icon */}
              <FaSearch size={45} />
            </div>

            {/* right Side Icons */}
            <div className={classes.order__container}>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                  <option value="">Ch</option>
                  <option value="">JP</option>
                </select>
              </a>

              <a href="">
                <div>
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                </div>
              </a>

              <a href="">
                <p>Returns</p>
                <span>& Orders</span>
              </a>

              <a href="" className={classes.cart}>
                <BiCartAdd size={38} />
                <span>0</span>
              </a>
            </div>
          </div>
        </section>

        <LowerHeader />
      </section>
    </>
  );
}

export default Header;