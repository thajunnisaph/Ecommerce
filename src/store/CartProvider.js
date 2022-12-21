import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import cartContext from "./cart-context";

const CartProvider = (props) => {
  const [Items, SetItems] = useState([]);
  const authctx1 = useContext(AuthContext);
  const crudcrud = `https://crudcrud.com/api/93899c765e454229812ee259507e0ce0/cart${authctx1.email}`;

  async function showfromCrud() {
    const resp = await fetch(crudcrud, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    SetItems(data);
  }

  async function AddItemToCartHandler(item) {
    
    console.log(item);

    const resp = await fetch(crudcrud, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await resp.json();
    console.log(data);

    SetItems([...Items, data]);
  }

  async function removeItemFromCartHandler(id) {

    const resp = await fetch(`${crudcrud}/${id}`, {
      method: "DELETE",
    });
    console.log(resp);

    const data = await fetch(crudcrud, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await data.json();
    SetItems(datas);
    // showfromCrud();
  }

  const cartcontext = {
    items: Items,
    total: 0,
    addItem: AddItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    showItem: showfromCrud,
  };
  return (
    <cartContext.Provider value={cartcontext}>
      {props.children}
    </cartContext.Provider>
  );
};
export default CartProvider;
