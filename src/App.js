import React,{Fragment} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Product from './components/Products/Product';
function App() {
  return (
    <Fragment>
     <Header></Header>
     <main>
      <Product></Product>
     </main>
     <Footer></Footer>
    </Fragment>
  );
}

export default App;
