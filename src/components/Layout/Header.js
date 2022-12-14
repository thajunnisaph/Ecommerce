import React from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import CartButton from './CartButton';


const Header = (props) =>{
return(
<Container fluid>
  <Navbar bg='dark' expand='lg' variant='dark'>
   <Container>
    <Nav>
    <ul>
    <li><NavLink  to='/Home'>HOME</NavLink></li>
    <li><NavLink to='/Store'>STORE</NavLink></li>
    <li><NavLink to='/About'>ABOUT </NavLink></li>
    <li><NavLink to='/Contact-Us'>CONTACT US</NavLink></li>
    </ul>
    </Nav>
    <CartButton onclick={props.onShowCart}></CartButton>
   </Container>
  </Navbar>
  
  <Navbar expand='lg' style={{backgroundColor:'gray' }}>
    <h1 >The Generics</h1>
  </Navbar>
</Container>
);
}
export default Header;