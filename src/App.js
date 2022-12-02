import React,{Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
function App() {
  const [ShowCart,SetShowCart] = useState(false);
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler = () =>{
    SetShowCart(false);
  }
  return (
    <Fragment>
     <Header onShowCart={CartShowHandler}></Header>
     {ShowCart && <Cart onCloseCart={CartHideHandler}></Cart>}
     <main>
      <Product></Product>
     </main>
     <Footer></Footer>
    </Fragment>
  );
}

export default App;
