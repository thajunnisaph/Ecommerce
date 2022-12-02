import React from 'react';
import { Button,Badge } from 'react-bootstrap';
const CartButton = () =>{
return (
    <>
    <Button variant="primary">Cart
    <Badge bg="secondary">0</Badge>
    </Button>
    </>
    
     
);
}
export default CartButton;