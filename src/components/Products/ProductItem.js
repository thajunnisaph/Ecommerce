import React, { useContext } from "react";
import classes from './ProductItem.module.css';
import { Button } from "react-bootstrap";
import cartContext from "../../store/cart-context";
import {Link} from 'react-router-dom';

const ProductItem = (props) => {
  const cntx= useContext(cartContext);

const addItemtoCart = (event) =>{
event.preventDefault();
cntx.addItem({...props,quantity: Number(1)});
}
  return (
    <li key={props.id}>
      <Link to={`/Store/${props.id}`}>
      <div className={classes.product}>
        <div className={classes.title}> {props.title} </div>
        <div className={classes.image}>
          <img src={props.img} alt="product"></img>
        </div>
        <div className={classes.price}>
          {`$${props.price}`}
          <div className="text-end">
            <Button variant="primary" size="sm"onClick={addItemtoCart}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      </Link>
    </li>
  );
};
export default ProductItem;
