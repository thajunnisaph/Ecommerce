import React,{Fragment} from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import CartButton from './CartButton';


const Header = (props) =>{
return(
<Container fluid>
  <Navbar bg='dark' expand='lg' variant='dark'>
   <Container>
    <Nav class="me-auto">
    <NavLink to='/Home'>HOME</NavLink>
    <NavLink to='/Store'>STORE</NavLink>
    <NavLink to='/About'>ABOUT </NavLink>
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