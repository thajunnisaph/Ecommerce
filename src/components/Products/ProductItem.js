import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import cartContext from "../../store/cart-context";
const ProductItem = (props) => {
  const cntx= useContext(cartContext);
const addItemtoCart = (event) =>{
event.preventDefault();
cntx.addItem({...props,quantity: Number(1)});

}
  return (
    <li key={props.id}>
      <div className="d-flex flex-column flex-wrap">
        <h3 className='text-center'>{props.title} </h3>
        <div>
          <img src={props.img} alt="product"></img>
        </div>
        <div>
          {`$${props.price}`}
          <div className="text-end">
            <Button variant="primary" size="sm"onClick={addItemtoCart}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
