import React from "react";

import ProductItem from "./ProductItem";
import { Button, Container, Row, Col } from "react-bootstrap";

const productsArr = [
  {
    id: "p1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = (props) => {
  return (
    <>
      <ul>
        <Container >
          <Row>
            <Col xs={3} >
              {productsArr.map((product) => {
                return (
                  <ProductItem
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.imageUrl}
                  ></ProductItem>
                );
              })}
            </Col>
          </Row>
        </Container>
      </ul>
      <div className="text-center">
        <Button variant="primary" size="lg">
          See the Cart
        </Button>
      </div>
    </>
  );
};
export default Product;
