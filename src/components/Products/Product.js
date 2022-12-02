import React from "react";

import ProductItem from "./ProductItem";
import {Button} from 'react-bootstrap';

const productsArr = [
  {
    id: 'p1',
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:'p2',
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  { id:'p3',
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:'p4',
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = () => {
  return (
    <section>
      <ul>
      <div className="d-flex justify-content-between">
      {productsArr.map((product)=>{
        return(
        <ProductItem id={product.id} key={product.id} title={product.title} price={product.price} img={product.imageUrl}></ProductItem>
        );
      })}
      </div>  
      </ul>
      <div className="text-center">
        <Button variant="primary" size="lg"  >
           See the Cart
        </Button>
        </div>
    </section>
  );
};
export default Product;
