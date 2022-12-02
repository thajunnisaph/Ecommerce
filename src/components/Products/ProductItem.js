import React from "react";

import { Button } from "react-bootstrap";
const ProductItem = (props) => {
  return (
    <li>
      <div className="d-flex flex-column">
        <h3>{props.title} </h3>
        <div>
          <img src={props.img} alt="product"></img>
        </div>
        <div>
          {`$${props.price}`}
          <div className="text-end">
            <Button variant="primary" size="sm">
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
