import React,{Fragment} from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import CartButton from './CartButton';


const Header = () =>{
return(
<Fragment>
  <Navbar bg='dark' expand='lg' variant='dark'>
   <Container>
    <Nav className='me-auto'>
    <Nav.Link href='#'>HOME</Nav.Link>
    <Nav.Link href='#'>STORE</Nav.Link>
    <Nav.Link href='#'>ABOUT </Nav.Link>
    </Nav>
    <CartButton></CartButton>
   </Container>
  </Navbar>
  <Navbar expand='lg' style={{backgroundColor:'gray' }}>
    <h1 >The Generics</h1>
  </Navbar >
</Fragment>
);
}
export default Header;