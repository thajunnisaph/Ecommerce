import React,{useState} from 'react';
import cartContext from './cart-context';

const CartProvider = (props) =>{
    const [Items,SetItems] = useState([]);
   
    const AddItemToCartHandler = (item) =>{
        console.log(item)
     const multipleitem= Items.find((cartitem)=>cartitem.id===item.id);
     if(multipleitem){
      multipleitem.quantity += item.quantity;
      const newupdateditem=Items.map((crtitm)=>
      crtitm.id ===item.id ? multipleitem:crtitm);
      SetItems(newupdateditem);
    
     }
     else{
      SetItems([...Items,item]);
     }
     
    
    }
    const removeItemFromCartHandler = () =>{

    };
    const cartcontext={
        items:Items,
        total:0,
        addItem:AddItemToCartHandler ,
        removeItem:removeItemFromCartHandler,
    }
return(
<cartContext.Provider value={cartcontext}>
    {props.children}
</cartContext.Provider>
);
}
export default CartProvider;