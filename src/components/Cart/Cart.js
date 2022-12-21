import React, { useContext } from "react";
import { Table, Card, Button, CloseButton } from "react-bootstrap";
import cartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartElements= useContext(cartContext);
    let totalamnt= 0;
  cartElements.items.forEach((item) =>{
    totalamnt= totalamnt+ item.quantity*item.price;
  }) 
  totalamnt = totalamnt.toFixed(2); 
  const removeHandler = (id) =>{
   cartElements.removeItem(id);
  }
  return (
    <Card style={{ width: "22rem", float: "right" }}>
      <Card.Body>
        <div className="text-end">
          <CloseButton onClick={props.onCloseCart} />
        </div>

        <Card.Title className="text-center">Cart</Card.Title>
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.items.map((cartitem,index) => {
                return (
                  <tr key={index}>
                    <td>{cartitem.title}</td>
                    <td>{cartitem.price}</td>
                    <td>{cartitem.quantity}</td>
                    <td><CloseButton onClick={()=>{removeHandler(cartitem._id)}}/></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <h5 className='text-end'>Total ${totalamnt}</h5>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
  );
};
export default Cart;
