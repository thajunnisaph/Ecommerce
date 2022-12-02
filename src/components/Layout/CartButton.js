import React from 'react';
import { Button,Badge } from 'react-bootstrap';
const CartButton = (props) =>{
return (
    <>
    <Button variant="primary" onClick={props.onclick}>Cart
    <Badge bg="secondary">0</Badge>
    </Button>
    </>
    
     
);
}
export default CartButton;