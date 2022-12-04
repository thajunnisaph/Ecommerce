import React,{ useState} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AboutUs from './Pages/AboutUs';
import {Route} from 'react-router-dom';
function App() {
  const [ShowCart,SetShowCart] = useState(false);
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler = () =>{
    SetShowCart(false);
  }
  return (
    <CartProvider>
      <Route path="/About">
        <AboutUs />
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
