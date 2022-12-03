import React,{ useState} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
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
     <Header onShowCart={CartShowHandler}></Header>
     {ShowCart && <Cart onCloseCart={CartHideHandler}></Cart>}
     <main>
      <Product></Product>
     </main>
     <Footer></Footer>
    </CartProvider>
  );
}

export default App;
