import React,{useContext} from 'react';
import { Button,Badge } from 'react-bootstrap';
import cartContext from '../../store/cart-context';
const CartButton = (props) =>{
    const crtcntx=useContext(cartContext);
   let quantity=0;
   crtcntx.items.forEach((item) =>{
    quantity=quantity+Number(item.quantity);
   })
return (
    <>
    <Button variant="primary" onClick={props.onclick}>Cart
    <Badge bg="secondary">{quantity}</Badge>
    </Button>
    </>
    
     
);
}
export default CartButton;