import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/Store">STORE</NavLink>
            </li>
            <li>
              <NavLink to="/About">ABOUT </NavLink>
            </li>
            <li>
              <NavLink to="/Login">LOGIN </NavLink>
            </li>
            <li>
              <NavLink to="/Contact-Us">CONTACT US</NavLink>
            </li>

            <li>
              <CartButton onclick={props.onShowCart}></CartButton>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.section}>
        <h1>The Generics</h1>
      </div>
    </>
  );
};
export default Header;
