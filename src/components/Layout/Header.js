import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import { NavLink ,useHistory} from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import CartButton from "./CartButton";
import classes from './Header.module.css';

const Header = (props) => {
  const authct = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = () =>{
   authct.logout();
   history.replace('/');
  }
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
              <NavLink to="/Contact-Us">CONTACT US</NavLink>
            </li>

            <li>
              <CartButton onclick={props.onShowCart}></CartButton>
            </li>
            <li>
              <Button onClick={logoutHandler}>Logout</Button>
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
