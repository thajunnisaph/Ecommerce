import React,{ useState} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import {Route} from 'react-router-dom';
import ContactUS from './Pages/ContactUS';
function App() {
  const [ShowCart,SetShowCart] = useState(false);
  
  const contactUsHandler = async(user) =>{
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


  }
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler = () =>{
    SetShowCart(false);
  }
  return (
    <CartProvider>
      <Route path='/Home'>
        <Home />
      </Route>
      <Route path="/About">
        <AboutUs />
      </Route>
      <Route path='/Contact-Us'>
        <ContactUS onContact={contactUsHandler}/>
      </Route>
    <Route path='/Store'>
     <Header onShowCart={CartShowHandler}></Header>
     {ShowCart && <Cart onCloseCart={CartHideHandler}></Cart>}
     <main>
      
      <Product></Product>
     </main>
     <Footer></Footer>
     </Route>
    </CartProvider>
  );
}

export default App;
