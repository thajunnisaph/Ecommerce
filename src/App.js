import React, { useState, useContext, useEffect } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import ContactUS from "./Pages/ContactUS";
import SingleProduct from "./components/Products/SingleProduct";
import AuthContext from "./store/AuthContext";
import cartContext from "./store/cart-context";
function App() {
  const [ShowCart, SetShowCart] = useState(false);
  const athctx = useContext(AuthContext);
  const ctctx = useContext(cartContext);
  const contactUsHandler = async (user) => {
    console.log(user);
    const response = await fetch(
      "https://ecommerce-87f03-default-rtdb.firebaseio.com/contactus.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  const CartShowHandler = () => {
    SetShowCart(true);
  };
  const CartHideHandler = () => {
    SetShowCart(false);
  };
  useEffect(() => {
   ctctx.showItem();
  }, [athctx.token]);
  return (
    <>
      {athctx.isLoggedIn && <Header onShowCart={CartShowHandler}></Header>}
      {ShowCart && athctx.isLoggedIn && <Cart onCloseCart={CartHideHandler}></Cart>}
      <main>
        <Switch>
          {!athctx.isLoggedIn && (
            <Route path="/Login" exact>
              <Login />
            </Route>
          )}
          {!athctx.isLoggedIn && (
            <Route path="/" exact>
              <Redirect to="Login" />
            </Route>
          )}

          {athctx.isLoggedIn && (
            <Route path="/" exact>
              <Home />
            </Route>
          )}

          {athctx.isLoggedIn && (
            <Route path="/About">
              <AboutUs />
            </Route>
          )}
          <Route path="/Contact-Us">
            <ContactUS onContact={contactUsHandler} />
          </Route>
          {athctx.isLoggedIn && (
            <Route path="/Store" exact>
              <Product></Product>
            </Route>
          )}
          <Route path="/Store/:productID">
            <SingleProduct />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      {athctx.isLoggedIn && <Footer />}
    </>
  );
}

export default App;
