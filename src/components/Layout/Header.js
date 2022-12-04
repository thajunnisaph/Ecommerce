import React,{Fragment} from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import CartButton from './CartButton';


const Header = (props) =>{
return(
<Fragment>
  <Navbar bg='dark' expand='lg' variant='dark'>
   <Container>
    <Nav className="active">
    <NavLink to='#'>HOME</NavLink>
    <NavLink to='/Store'>STORE</NavLink>
    <NavLink to='/About'>ABOUT </NavLink>
    </Nav>
    <CartButton onclick={props.onShowCart}></CartButton>
   </Container>
  </Navbar>
  <Navbar expand='lg' style={{backgroundColor:'gray' }}>
    <h1 >The Generics</h1>
  </Navbar >
</Fragment>
);
}
export default Header;